import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef, OnDestroy, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ImportSandbox } from '../../../../../../core/product-configuration/import/import.sandbox';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bulk-product-upload',
  templateUrl: './product-import.component.html',
  styleUrls: ['./product-import.component.scss']
})
export class ProductImportComponent implements OnInit, OnDestroy {
  @ViewChild('fileInput') fileInput: ElementRef;

  public Title = 'Bulk Products';
  public file: any = {};
  files: any = [];
  chooseType: string = 'Standard';
  private subscriptions: Array<Subscription> = [];
  closeMessage: boolean = true;

  constructor(public sandbox: ImportSandbox,
    private toastr: ToastrService,
    private titleService: Title,
    private router: Router,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.titleService.setTitle(this.Title);
  }

  onChange() {
    if (this.chooseType == 'Standard') {
      this.router.navigate(['/new-catalog/import/products-list']);
    }
    if (this.chooseType == 'Custom') {
      this.router.navigate(['/new-catalog/import/data-import']);
    }
  }

  // Close Button
  closeButton() {
    this.closeMessage = false;
  }

  downloadFile() {
    this.sandbox.downloadFile({});
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
      this.onFileChange(event.dataTransfer.files);
    }
  }

  onFileChange(files: FileList) {

    this.file = files;
    for (let i = 0; i < files.length; i++) {
      this.files?.push({
        name: files[i].name,
        size: files[i].size,
        progress: 0,
        chunkSize: 1024, // 1KB
        uploaded: 0,
      });
      // const ext = /^.+\.([^.]+)$/.exec(this.files[i].name);
      // if (ext || (ext && ext[1] == 'zip')) {
      if (this.file[i] && this.file[i].name.endsWith('.zip')) {
        this.readChunk(files[i], i);
      } else {
        this.files = [];
        this.toastr.error('Please choose a zip file');
      }
    }
  }

  readChunk(file: File, index: number) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.files[index].uploaded += this.files[index].chunkSize;
      this.files[index].progress = (this.files[index].uploaded / file.size) * 100;
      if (this.files[index].uploaded < file.size) {
        this.readChunk(file, index);
      } else {
        this.files[index].progress = 100;
      }
      if (this.files[index].progress === 100) {
        this.uploadFile();
      }
    };
    reader.readAsArrayBuffer(
      file.slice(
        this.files[index].uploaded,
        this.files[index].uploaded + this.files[index].chunkSize
      )
    );
  }

  uploadFile(): void {
    const formData = new FormData();
    formData.append('file', this.file.file);

    const params: any = {};
    params.file = this.file[0];
    this.sandbox.uploadFile(params);

    this.subscriptions.push(this.sandbox.uploadFile$.subscribe(data => {
      if (!data) {
        this.files = [];
      }
      if (data && data.status === 1) {
        this.router.navigate(['/new-catalog/products/list']);
        this.cd.detectChanges();
      }
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}