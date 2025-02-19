// angular import
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder } from '@angular/forms';
// Third Party imports
import { Subscription } from 'rxjs';
import * as moment from 'moment';
//sandbox
import { ExportSandbox } from '../../../../../../core/product-configuration/export/export.sandbox';
//constant
import { getTypes } from '../../../../../shared/components/reusable-forms/form-constant';
import { contentTranslate, customTable, fields, objForm, removeEmptyKeys } from './export-data.constant';
import { getFormControlsFieldsObj } from '../../../../../shared/components/reusable-forms/form-constant';
import { itemsPerPage, itemsPerPageList } from '../../../../../shared/components/reusable-pagination/pagination.constant';
import { imagesList } from '../../../../../../../../src/app/default/shared/components/alert-content/alert.content.constant';
import { configureAlertConfig } from '../../../../../../../../src/app/default/shared/components/alert-content/alert.content.constant';

@Component({
  selector: 'app-export-data',
  templateUrl: './export-data.component.html',
  styleUrls: ['./export-data.component.scss']
})

export class ExportDataComponent implements OnInit {

  @ViewChild("dropdownContent", { static: false }) dropdownContent!: ElementRef;
  @ViewChild("dropdownContentFilter", { static: false }) dropdownContentFilter!: ElementRef;

  //Dynamic columns
  backupData: any = structuredClone(customTable);
  dynamicColumnFields: any = structuredClone(customTable);

  // Pagination
  currentPage = 1;
  limit: any = itemsPerPage;
  offset = 0;
  pageSizeList = itemsPerPageList;
  queryData: any = {};

  // List
  orderListArray: any[] = [];

  // check box
  selectedDatas: any = [];
  tableCheckbox = {
    isSelectAll: false
  };

  // filters dynamic columns
  backupColumns = structuredClone(fields);

  // Common
  _Object = Object;
  empty = [null, '', undefined];

  // Alerts
  alertConfig = {};

  // Reusable form 
  formObjFormGroup: any;
  dynamicObjControls: any = {};
  backupFormValue = {};
  formValueExists = false;

  // Subscriptions
  private subscriptions: Subscription = new Subscription();

  // Arrow functions
  trackByIndex = (index: number): number => index;

  constructor(
    public sandbox: ExportSandbox,
    public titleService: Title,
    public route: ActivatedRoute,
    private router: Router,
    private fb: UntypedFormBuilder,
  ) {
  }

  ngOnInit(): void {
    // form
    this.buildForm();
    // Query param route value
    this.routeSubscribe();
  }

  // Filter open
  open(): void {
    this.formObjFormGroup.patchValue(this.backupFormValue);
  }

  // Page change event pagination
  onPageChange(event: { offset: number; limit: number }): void {
    this.limit = event.limit;
    this.currentPage = Math.floor(event.offset / event.limit) + 1;
    this.getOrderList();
  }

  // Per page change drop down
  pageSizeChange(e): void {
    this.onPageChange({ limit: e.id, offset: 0 });
  }

  // Filters
  applyFilter(): void {
    this.filterValueUpdate();
    this.resetAll();
  }

  // Search reset
  clearSearch(): void {
    this.resetAll();
  }
  // Search name
  searchItems(): void {
    this.resetAll();
  }

  /*Remove filter*/
  removeFilter(remove): void {
    this.formObjFormGroup.controls[remove.key].reset();
    this.filterValueUpdate();
    this.resetAll();
  }
  /*Reset filters*/
  filterReset(type: string): void {
    if (type == 'clearAll') {
      this.formObjFormGroup.reset()
    } else {
      this.formObjFormGroup.patchValue({
        'Select Module': null,
        // 'Select User': '',
        'Date Added': '',
      });
    }
    this.filterValueUpdate();
    this.resetAll();
  }
  // Save columns
  saveColumns(data: any): void {
    this.backupColumns = structuredClone(data);
    this.showHideTableColumn();
  }

  // Query param value and pagination
  private getQueryParam(): any {
    const params = {
      limit: this.limit,
      offset: this.offset,
      currentPage: this.currentPage,
      keyword: this.backupFormValue['Search'] ?? '',
      moduleName: this.backupFormValue['Select Module'] ?? '',
      // createdBy: this.backupFormValue['Select User'] ?? '',
      createdDate: this.backupFormValue['Date Added'] ?? ''
    };
    return params;
  }

  // Dropdown Close
  private dropDownClose(dropDownName): void {
    if (this.hasOwnProperty(dropDownName)) {
      this[dropDownName]?.close();
    }
  }

  // Query param route value subscribe
  private routeSubscribe(): void {
    let paramsValue: any = {};
    this.subscriptions.add(this.route.queryParams.subscribe(params => {
      paramsValue = params;
      this.limit = paramsValue.limit ? Number(paramsValue.limit) : this.limit;
      this.offset = paramsValue.offset ? Number(paramsValue.offset) : 0;
      this.currentPage = paramsValue.currentPage ? Number(paramsValue.currentPage) : 1;
      this.formObjFormGroup.patchValue({
        'Select Module': paramsValue.moduleName ? paramsValue.moduleName : null,
        // 'Select User': paramsValue.createdBy ?? '',
        'Date Added': paramsValue.createdDate ?? '',
        'Search':paramsValue.keyword ?? '',
      });
      this.filterValueUpdate();
    }));
    this.getOrderList();
    this.getOrderListcount();
  }

  //Show hide table column
  private showHideTableColumn(): void {
    this.dynamicColumnFields.forEach(val => {
      if (val.hasOwnProperty('filterColName')) {
        val.checked = this.backupColumns[val.filterColName];
      }
    })
  }

  // Get list
  private getOrderList(): void {
    this.alertConfig = configureAlertConfig(contentTranslate.success, imagesList.success);
    this.offset = (this.currentPage - 1) * this.limit;
    let params = removeEmptyKeys(this.getQueryParam());
    params.count = 0;
    this.sandbox.getExportList(params);
    this.subscriptions.add(
      this.sandbox.getExportList$.subscribe((val: any) => {
        this.orderListArray = [];
        if (val && val.data) {
          this.orderListArray = val.data;
          this.orderListArray.forEach((item: any) => {
            item.exportedBy = item?.user?.firstName + ' ' + item?.user?.lastName;
            item.createDateby = item?.createdDate;
          })
          this.reset();
        }
      })
    )
    this.updateQueryParam();
  }

  // Count list
  private getOrderListcount(): void {
    const params = removeEmptyKeys(this.getQueryParam());
    params.count = 1;
    delete params.currentPage;
    delete params.limit;
    delete params.offset;
    this.sandbox.getExportListCount(params);
  }

  // Value update in queryparams for pagination
  private updateQueryParam(): void {
    this.router.navigate([], { queryParams: this.getQueryParam(), queryParamsHandling: 'merge' });
  }

  // intialize form
  private buildForm(): void {
    const formObjModel = objForm;
    const formGroupField = getFormControlsFieldsObj(formObjModel);
    this.formObjFormGroup = this.fb.group(formGroupField);
    Object.keys(formObjModel).forEach((element: any) => {
      this.dynamicObjControls[element] = getTypes(formObjModel[element], this.formObjFormGroup);
    });
    this.filterValueUpdate();
  }

  //Reset All
  private resetAll(): void {
    this.getOrderList();
    this.getOrderListcount();
    this.dropDownClose('dropdownContentFilter');
    this.dropDownClose('dropdownContent');
  }

  //Filter Value Update
  private filterValueUpdate(): void {
    this.backupFormValue = structuredClone(this.formObjFormGroup?.value);
    if (this.backupFormValue['Date Added']) {
      this.backupFormValue['Date Added'] = moment(this.backupFormValue['Date Added']).format('YYYY-MM-DD');
    }
    this.formValueExists = Object.values(this.backupFormValue).some((val: any) => !this.empty.includes(val));

  }

  // Reset checkbox
  private reset(isChecked = false): void {
    this.orderListArray.forEach(val => val.checked = isChecked);
    this.selectedDatas = this.orderListArray.filter(val => val?.checked);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

}