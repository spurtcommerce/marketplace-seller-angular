import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../../providers/api/api';
import { HttpParams } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ExportService extends Api {

  private url: string = this.getBaseUrl();

  getExportList(params): Observable<any> {
  
    return this.http.get(this.url + '/vendor-export-log', { params });
  }

  getExportListCount(params): Observable<any> {
  
    let reqOpts: any = {};
    reqOpts = params;
    return this.http.get(this.url + '/vendor-export-log', {
      params: reqOpts
    });
  }

  getFromModule(params): Observable<any>{
    if(params.type=='Orders') {
      const reqOpts: any = {};
      reqOpts.responseType = 'arraybuffer';
      if (params.data) {
        reqOpts.params = new HttpParams();
        for (const k in params.data) {
          if (k) {
            reqOpts.params = reqOpts.params.set(k, params.data[k]);
          }
        }
      }
      return this.http.get(this.url + '/order/order-excel-list/', reqOpts);
    }

    if(params.type=='Failed Orders') {
      const reqOpts: any = {};
      reqOpts.responseType = 'arraybuffer';
      if (params.data) {
        reqOpts.params = new HttpParams();
        for (const k in params.data) {
          if (k) {
            reqOpts.params = reqOpts.params.set(k, params.data[k]);
          }
        }
      }
      return this.http.get(this.url + '/vendor-order/failed-order-excel-list/', reqOpts);
    }

    if(params.type=='Manage Products') {
      const reqOpts: any = {};
      reqOpts.responseType = 'arraybuffer';
      if (params.data) {
        reqOpts.params = new HttpParams();
        for (const k in params.data) {
          if (k) {
            reqOpts.params = reqOpts.params.set(k, params.data[k]);
          }
        }
      }
      return this.http.get(this.url + '/vendor-product/allproduct-excel-list/', reqOpts);
    }

    if(params.type=='Product Categories') {
      const reqOpts: any = {};
      reqOpts.responseType = 'arraybuffer';
      if (params.data) {
        reqOpts.params = new HttpParams();
        for (const k in params.data) {
          if (k) {
            reqOpts.params = reqOpts.params.set(k, params.data[k]);
          }
        }
      }
      return this.http.get(this.url + '/category-excel-list', reqOpts);
    }

    if(params.type=='Archive Payments') {
      const reqOpts: any = {};
      reqOpts.responseType = 'arraybuffer';
      if (params.data) {
        reqOpts.params = new HttpParams();
        for (const k in params.data) {
          if (k) {
            reqOpts.params = reqOpts.params.set(k, params.data[k]);
          }
        }
      }
      return this.http.get(this.url + '/vendor-sales/archive-payment-export', reqOpts);
    }

    if(params.type=='Manage Customers') {
      const reqOpts: any = {};
      reqOpts.responseType = 'arraybuffer';
      if (params.data) {
        reqOpts.params = new HttpParams();
        for (const k in params.data) {
          if (k) {
            reqOpts.params = reqOpts.params.set(k, params.data[k]);
          }
        }
      }
      return this.http.get(this.url + '/vendor-order/export-customer', reqOpts);
    }
  }

  downloadExcel(params) {
    this.url = this.getBaseUrl();
    const reqOpts: any = {};
    reqOpts.responseType = 'blob';
    if (params) {
      reqOpts.params = new HttpParams();
      for (const k in params) {
        if (k) {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }
    }
    return this.http.get(this.url + '/media/download-file', { params });
  }


  getProductId(params): Observable<any> {
    if (params.type === 'Orders') {
      return this.http.get(this.url + '/vendor-order/order-list', {
        params: params.data
      });
    } else if (params.type === 'Failed Orders') {
      return this.http.get(this.url + '/vendor-order/vendor-failed-order-list', { 
        params: params.data 
      });
    } else if (params.type === 'Manage Products') {
      return this.http.get(this.url + '/vendor-product/allproduct-excel-list', {
        params: params.data
      });
    } else if (params.type === 'Product Categories') {
      return this.http.get(this.url + 'product/api/category/category-count', {
        params: params.data
      });
    } else if (params.type === 'Archive Payments') {
      return this.http.get(this.url + '/vendor-sales/archive-payment-list-count', {
        params: params.data
      });
    } else if (params.type === 'Manage Customers') {
      return this.http.get(this.url + '/vendor-order/purchased-customer-list', {
        params: params.data
      });
    }
  }


  getModulesList(params): Observable<any> {
    
    const validTypes = [
      'Orders', 
      'Failed Orders', 
      'Product Categories', 
      'Manage Products', 
      'Archive Payments', 
      'Manage Customers'
    ];
  
    if (validTypes.includes(params.type)) {
      return this.http.post(this.url + '/vendor-export-log', params.data);
    }
  }
}
