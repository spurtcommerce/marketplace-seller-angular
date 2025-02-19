import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ExportSandbox } from '../../../../../../../../src/app/core/product-configuration/export/export.sandbox';

@Component({
  selector: 'app-from-module',
  templateUrl: './from-module.component.html',
  styleUrls: ['./from-module.component.scss']
})
export class FromModuleComponent implements OnInit {

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
  createdBy: any = {};
  exportData: any;
  productId: any;
  count: any = {};
  private subscriptions = new Subscription();
  private isGetModulesListCalled = false; // Flag to prevent multiple calls

  public chooseModuleError: Boolean = false;

  submit: boolean = false;

  constructor(
    public sandbox: ExportSandbox,
    public route: Router,
    public cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.count = {};
    this.isGetModulesListCalled = false;
  }

  getModule(): void {
    this.submit = true
    this.isGetModulesListCalled = true;
    this.createdBy = JSON.parse(localStorage.getItem('vendorUserDetails'));
    const params: any = {};
    params.module = this.selectedModule?.name ?? '';
    params.referenceId = this.createdBy.vendorId;
    this.export();
  }

  // id export 
  export() {
    this.count = {};
    this.isGetModulesListCalled = false;

    if (['', null, undefined].includes(this.selectedModule?.name)) {
      this.chooseModuleError = true;
      return
    }
    switch (this.selectedModule?.name) {
      case 'Orders': {
        const param: any = {
          data: {
            failedOrder: false,
            orderId: ''
          },
          type: 'Orders'
        };
        this.sandbox.getFromModule(param);
        const params: any = {
          data: {
            count: true
          },
          type: 'Orders'
        }
        this.sandbox.getProductId(params);
        break;
      }
      case 'Failed Orders': {
        const param: any = {
          data: {
            failedOrder: true,
            orderId: ''
          },
          type: 'Failed Orders'
        };
        this.sandbox.getFromModule(param);
        const params: any = {
          data: {
            count: 1
          },
          type: 'Failed Orders'
        }
        this.sandbox.getProductId(params);
        break;
      }
      case 'Manage Products': {
        const param: any = {
          data: {},
          type: 'Manage Products'
        };
        this.sandbox.getFromModule(param);
        const params: any = {
          data: {
            count: true
          },
          type: 'Manage Products'
        }
        this.sandbox.getProductId(params);
        break;
      }
      case 'Product Categories': {
        const param: any = {
          data: {},
          type: 'Product Categories'
        };
        this.sandbox.getFromModule(param);
        const params: any = {
          data: {
            count: 1,
            limit: 0,
            offset: 0,
            keyword: '',
            sortOrder: 0,
            status: ''
          },
          type: 'Product Categories'
        }
        this.sandbox.getProductId(params);
        break;
      }
      case 'Archive Payments': {
        const param: any = {
          data: {},
          type: 'Archive Payments'
        };
        this.sandbox.getFromModule(param);
        const params: any = {
          data: {
            count: 1
          },
          type: 'Archive Payments'
        }
        this.sandbox.getProductId(params);
        break;
      }
      case 'Manage Customers': {
        const param: any = {
          data: {},
          type: 'Manage Customers'
        };
        this.sandbox.getFromModule(param);
        const params: any = {
          data: {
            count: 1,
            customerId: ''
          },
          type: 'Manage Customers'
        }
        this.sandbox.getProductId(params);
        break;
      }

    }

    this.subscriptions.add(this.sandbox.getProductId$.subscribe((count: any) => {
      this.count = count?.data;
      this.cdr.detectChanges()
      let vall: any = {};
      if (!['', null, undefined].includes(count?.status) && !this.isGetModulesListCalled) {
        if (this.selectedModule?.name == 'Orders') {
          vall = {
            data: {
              recordAvailable: this.count.orderCount,
              module: this.selectedModule?.name,
              referenceId: this.createdBy?.vendorId
            },
            type: 'Orders'
          }
        }
        else if (this.selectedModule?.name == 'Failed Orders') {
          vall = {
            data: {
              recordAvailable: this.count,
              module: this.selectedModule?.name,
              referenceId: this.createdBy?.vendorId

            },
            type: 'Failed Orders'
          }
        }
        else if (this.selectedModule?.name == 'Manage Products') {
          vall = {
            data: {
              recordAvailable: this.count,
              module: this.selectedModule?.name,
              referenceId: this.createdBy?.vendorId
            },
            type: 'Manage Products'
          }
        }
        else if (this.selectedModule?.name == 'Product Categories') {
          vall = {
            data: {
              recordAvailable: this.count.productCount,
              module: this.selectedModule?.name,
              referenceId: this.createdBy?.vendorId
            },
            type: 'Product Categories'
          }
        }
        else if (this.selectedModule?.name == 'Archive Payments') {
          vall = {
            data: {
              recordAvailable: this.count,
              module: this.selectedModule?.name,
              referenceId: this.createdBy?.vendorId
            },
            type: 'Archive Payments'
          }
        }
        else if (this.selectedModule?.name == 'Manage Customers') {
          vall = {
            data: {
              recordAvailable: this.count,
              module: this.selectedModule?.name,
              referenceId: this.createdBy?.vendorId
            },
            type: 'Manage Customers'
          }
        }
        this.sandbox.getModulesList(vall)
        this.isGetModulesListCalled = true;
        this.subscriptions.add(this.sandbox.getModulesList$.subscribe((val: any) => {
          if (val?.status === 1)
            this.route.navigate(['/new-catalog/export/export-data']);
        }))

      }
    }));
  }


  getError() {
    this.chooseModuleError = false;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.count = {};
  }
}
