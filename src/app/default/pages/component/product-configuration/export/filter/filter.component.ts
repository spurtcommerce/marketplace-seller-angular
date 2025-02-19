// angular import
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

// sandbox
import { ExportSandbox } from '../../../../../../core/product-configuration/export/export.sandbox';
@Component({
  selector: 'app-export-data-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class ExportFilterComponent implements OnInit {

  filterForm: UntypedFormGroup;
  keyword: string;
  module: any;
  date: any;
  users: any = "";
  pagenationCount: boolean;
  
  // select module
  modulesList: any = [
    // { name: 'Orders', translate: 'dataExport.Orders' },
    { name: 'Failed Orders', translate: 'dataExport.FaliedOrders' },
    // { name: 'Abondoned', translate: 'dataExport.Abondoned' },
    // { name: 'Archive Payments', translate: 'dataExport.ArchivePayments' },
    // { name: 'Product Categories', translate: 'dataExport.ProductCategories' },
    { name: 'Manage Customers', translate: 'dataExport.Customers' },
    // { name: 'Banners', translate: 'dataExport.Banners' },
    // { name: 'Coupon', translate: 'dataExport.Coupon' },
    // { name: 'Vendors', translate: 'dataExport.Vendors' },
    { name: 'Manage Products', translate: 'dataExport.ManageProduct' },
    // { name: 'Vendor Products', translate: 'dataExport.VendorProducts' },
    // { name: 'Payments', translate: 'dataExport.Payments' },
    // { name: 'Settlement History', translate: 'dataExport.SettlementHistory' },
    // { name: 'Sales by Vendor', translate: 'dataExport.SalesByVendor' },
    // { name: 'Total Sales Report', translate: 'dataExport.TotalSalesReport' },
    // { name: 'Settlements', translate: 'dataExport.Settlements' }
  ];
  selectedModule: any = null;
  offset: any;
 
  // select date
  miniDate: any;
  fromDate: any;
  displayStartDate: any;

  @Output() progressEmits = new EventEmitter<string>();
  @Output() FromEmit = new EventEmitter<any>();
  @Input() pageSize: any;

  constructor(
    public fb: UntypedFormBuilder,
    public route: ActivatedRoute,
    public sandbox: ExportSandbox,
  ) {
  }

  ngOnInit() {
    this.pageSize = localStorage.getItem('itemsPerPage');
    this.pagenationCount = true;
    this.setForm();
    this.filterForm.reset();
 
  }

  setForm() {
    this.initFilterForm();
    this.filterForm.controls['keyword'].setValue(this.keyword);
    this.filterForm.controls['module'].setValue(this.module);
    this.filterForm.controls['users'].setValue(this.users);
    this.filterForm.controls['date'].setValue(this.date);
  }

  initFilterForm() {
    this.filterForm = this.fb.group({
      keyword: ['', Validators.required],
      module: [null, Validators.required],
      users: [null, Validators.required],
      date: [null, Validators.required],
    });
  }

  resetFilter() {
    this.filterForm.reset();
    const params: any = {};
    params.offset = 0;
    params.limit = this.pageSize || 10;
    params.keyword = '';
    params.moduleName = '';
    params.createdBy = '';
    params.userId = '';
    params.createdDate = '';
    // params.type = 'reset';
    this.progressEmits.emit(params);
    this.sandbox.getExportList(params);
    params.count = 1;
    this.sandbox.getExportListCount(params)

  }

  applyFilter() {
    this.keyword = this.filterForm.value.keyword ? this.filterForm.value.keyword : '';
    this.module = this.filterForm.value.module ? this.filterForm.value.module : '';
    this.users = this.filterForm.value.users ? this.filterForm.value.users : '';
    const form = this.filterForm.value.date;
    if (form) {
      const date = new Date(form);
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2); // Month starts from 0
      const day = ('0' + date.getDate()).slice(-2);
      const fromDate = `${year}-${month}-${day}`;
      this.fromDate = fromDate; // Assign fromDate to this.fromDate
    } else {
      this.fromDate = null;
    }
    this.date = this.fromDate ? this.fromDate : '';
    const params: any = {};
    params.offset = '';
    params.limit = this.pageSize;
    params.keyword = this.keyword;
    params.moduleName = [null, undefined, ''].includes(this.module) ? '' : this.module;
    params.createdDate = [null, undefined, ''].includes(this.date) ? '' : this.date;
    params.userId = [null, undefined, ''].includes(this.users) ? '' : this.users;
    this.progressEmits.emit(params);
    this.FromEmit.emit(this.filterForm);

  }

}
