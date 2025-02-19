import { DatashareService } from './../datashare.service';
import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../../../../environments/environment';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Datas, categoryData } from '../import.constant';

type AOA = any[][];

@Component({
  selector: 'app-data-import',
  templateUrl: './data-import.component.html',
  styleUrls: ['./data-import.component.scss']
})
export class DataImportComponent implements OnInit {
  logotypeError: boolean;
  fileSize = environment.filesize;
  logoimageSizeError: boolean;
  selectedCar: any;
  rightSidevalue: any = [];
  validation: any = [];
  unmappedvalue: any;
  filter: any = '';
  title = 'Data Import';

  initialvalue: any;
  headCopy: any;

  FirstTab: boolean = true;
  ErrorStatus: any = '';
  ErrorStatussss: any = '';
  fileMBSize:any=(environment.filesize)/1024;

  optionDataArray: any;
  dummyArray: any = [];

  workbookName: any;
  header: any;
  data: any;
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: any;
  filterParams: {};

  vall: string;
  fileError: boolean = false;
  selectName: any;
  FileErrorStatue: any = '';
  selectedaccess: any;
  selectedFile: any;

  // loader 
  isUploading: boolean = false;
  chooseType: string = 'Custom';

  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService,
    private sharedService: DatashareService,
    private router: Router,
    private titleService: Title,
    private changeDetectors: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    const storedValue = localStorage.getItem('myKey');
    if (storedValue) {
      const parsedValue = JSON.parse(storedValue);
      this.fileName = parsedValue.name;
      this.selectedaccess = parsedValue.moduleName;
    }
  }

  access = [
    { id: 1, name: 'Product' },
    // { id: 2, name: 'Category' },
  ];

  onChange() {
    if (this.chooseType == 'Standard') {
      localStorage.removeItem('myKey');
      this.router.navigate(['/new-catalog/import/products-list']);
    }
    if (this.chooseType == 'Custom') {
      this.router.navigate(['/new-catalog/import/data-import']);
    }
  }

  // Handle drag-and-drop events
  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      this.handleFile(event.dataTransfer.files[0]);
    }
  }

  // Handle file input change
  onFileChange(evt: any): void {
    this.handleFile(evt.target.files[0]);
  }

  handleFile(file: File): void {
    this.fileName = '';
    this.ErrorStatus = '';

    // Check for multiple files
    if (file instanceof FileList && file.length > 1) {
      this.logotypeError = true;
      this.fileError = true;
      this.ErrorStatus = 'Validation.Cannot use multiple files';
      return;
    }

    const allowed_types = ["text/csv", ".xlsx", ".xls", "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.oasis.opendocument.spreadsheet"];
    const size = Math.round(file.size / 1024); // Size in KB

    if (!allowed_types.includes(file.type)) {
      this.logotypeError = true;
      this.fileError = true;
      this.ErrorStatus = 'Validation.Only Excel File are allowed';
      return;
    }
    if (!this.selectedaccess) {
      this.logotypeError = true;
      this.FileErrorStatue = 'Validation.Please Select Module Name';
      this.selectedaccess = '';
      this.ErrorStatussss = 'Validation.Please Select Module Name';
      return;
    }
    if (size > this.fileSize) {
      this.logoimageSizeError = true;
      this.fileError = true;
      this.ErrorStatus = 'Validation.File should be less than';
      return
    }

    this.selectedFile = file;
    let jsonData: any = null;

    // File reading and processing
    const reader: FileReader = new FileReader();

    const arrayWithAsterisk = this.optionDataArray?.filter((item: any) => item.name.includes('*')).map((option: any) => option.name);
    this.validation = arrayWithAsterisk;

    reader.onload = (e: any) => {
      / read workbook /
      const bstr = reader.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      / grab first sheet /
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      / save data /
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      this.initialvalue = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));

      const jsonData = wb.SheetNames.reduce((initial: any, name: any) => {
        const sheet = wb.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(this.initialvalue);
        return initial;
      }, {});

      if ([1, 0].includes(this.data.length)) {
        this.header = [];
        this.headCopy = [];
        this.data = [];
        this.initialvalue = [];
        this.FirstTab = false;
        this.fileError = true;
        this.ErrorStatus = 'Validation.No Data Found';
        this.selectedFile = null;
        this.changeDetectors.detectChanges();
      } else {
        this.FirstTab = true;
        if (this.data.length == 2) {
          this.header = this.data[0];
          this.headCopy = this.initialvalue[0];
          this.dummyArray = Array.from({ length: this.header.length }, () => ({ value: null }));
          const params = {
            moduleName: this.selectedaccess,
            name: this.selectedFile.name,
            size: this.selectedFile.size,
            header: this.header,
            data: this.data,
            initialList: this.initialvalue,
            headcopy: this.headCopy,
            validations: this.validation
          };
          localStorage.setItem('myKey', JSON.stringify(params));
        }
        else {
          const compareNestedArrays = (arr: any) => {
            const firstLevelArray = arr[0];
            for (let i = 1; i < arr.length; i++) {
              const currentRow = arr[i];
              if (currentRow.length !== firstLevelArray.length) return false;
              for (let j = 0; j < firstLevelArray.length; j++) {
                if (currentRow[j] !== firstLevelArray[j]) return false;
              }
            }
            return true;
          };

          const result = compareNestedArrays(this.data.slice(1)); // Exclude the first level array
          if (result) {
            this.header = [];
            this.headCopy = [];
            this.data = [];
            this.initialvalue = [];
            this.FirstTab = false;
            this.ErrorStatus = 'Validation.Duplicate Value Found';
            this.selectedFile = null;
            this.changeDetectors.detectChanges();
            this.fileError = true;
          } else {
            this.header = this.data[0];
            this.headCopy = this.initialvalue[0];
            this.dummyArray = Array.from({ length: this.header.length }, () => ({}));
            this.FirstTab = true;
            this.fileError = false;

            const params = {
              moduleName: this.selectedaccess,
              name: this.selectedFile.name,
              size: this.selectedFile.size,
              header: this.header,
              data: this.data,
              initialList: this.initialvalue,
              headcopy: this.headCopy,
              validations: this.validation
            };
            localStorage.setItem('myKey', JSON.stringify(params));
          }
        }
        this.isUploading = true;
        const uploadElement = document.querySelector('.import-file-upload');
        if (uploadElement) {
          uploadElement.classList.add('loading');
        }

        setTimeout(() => {
          if (uploadElement) {
            uploadElement.classList.remove('loading');
          }
          this.isUploading = false;
          this.toastr.success('File uploaded sucessfully!');
        }, 1000);
      };
    };
    reader.readAsBinaryString(file);
  }

  uploadModel(): void {
    if (this.selectedaccess == "Product") {
      this.optionDataArray = Datas;
      this.FileErrorStatue = '';
    }
    if (this.selectedaccess == "Category") {
      this.optionDataArray = categoryData;
      this.FileErrorStatue = '';
    }
    localStorage.removeItem('myKey')
    this.selectedFile = '';
    this.fileName = '';
    this.ErrorStatus = '';
  }

  reset(): void {
    localStorage.removeItem('myKey');
    this.FileErrorStatue = '';
    this.selectedFile = '';
    this.fileName = '';
    this.ErrorStatus = '';
    this.selectedaccess = '';
    this.FileErrorStatue = '';
    this.router.navigate(['/new-catalog/import/products-list']);
  }

  ImportPage(): void {
  
    if(!['', null, undefined].includes(this.selectedaccess) && !['',null,undefined].includes(this.selectedFile )){
      this.router.navigate(['/new-catalog/import/upload-file']);
    }else{
      if(['', null, undefined].includes(this.selectedaccess)){
        this.FileErrorStatue = 'Validation.Please Select Module Name';
      }else{
        this.ErrorStatus = 'Validation.Please Upload Excel File';
        // this.toastr.error("Please Upload Excel File")
      }
    }

  
  }
}
