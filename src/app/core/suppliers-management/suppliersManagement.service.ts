
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Api } from '../providers/api/api';
@Injectable({
  providedIn: 'root',
})
export class suppliersManagementService extends Api {
  // for get method
  public params: any = {};
  // url
  private basUrl = this.getBaseUrl();

  //suppliersList
  public suppliersList(params): Observable<any> {
    return this.http.get(this.basUrl + '/supplier', { params: params });
  }

  /*  suppliersListCount*/
  public suppliersListCount(params): Observable<any> {
    return this.http.get(this.basUrl + '/supplier', { params: params });
  }

  /*addSuppliers*/
  public addSuppliers(params): Observable<any> {
    return this.http.post(this.basUrl + '/supplier', params);
  }

  /*deleteSuppliers*/
  public deleteSuppliers(params): Observable<any> {
    return this.http.delete(this.basUrl + '/supplier/' + params);
  }

  /*editSuppliers*/
  public editSuppliers(params): Observable<any> {
    return this.http.get(this.basUrl + '/supplier/' + params);
  }

  /*updateSuppliers*/
  public updateSuppliers(params): Observable<any> {
    return this.http.put(this.basUrl + '/supplier/' + params.id, params);
  }

  /*bulkExportSupplier*/
  public bulkExportSupplier(param): Observable<any> {
    const reqOpts: any = {};
    reqOpts.responseType = 'arraybuffer';
    if (param) {
      reqOpts.params = new HttpParams();
      for (const k in param) {
        if (k) {
          reqOpts.params = reqOpts.params.set(k, param[k]);
        }
      }
    }
    return this.http.get(this.basUrl + '/supplier/export/supplier', reqOpts);
  }

  /*BulkDataDelete*/
  public BulkDataDelete(params): Observable<any> {
    return this.http.delete(this.basUrl + '/supplier/delete-multiple/supplier', params);
  }

  /*countryList*/
  public countryList(params): Observable<any> {
    return this.http.get(this.basUrl + '/list/country-list', { params: params });
  }

  /*categoryList*/
  public categoryList(params): Observable<any> {
    return this.http.get(this.basUrl + '/list/category', { params: params });
  }

  /*documentType*/
  public documentType(params): Observable<any> {
    return this.http.get(this.basUrl + '/vendor-document/document', { params: params });
  }

  /*documentUpload*/
  public documentUpload(params): Observable<any> {
    return this.http.post(this.basUrl + '/media/upload-file', params);
  }

  /*bulkStatusUpload*/
  public bulkStatusUpload(params): Observable<any> {
    return this.http.put(this.basUrl + '/supplier/status/update', params);
  }
}