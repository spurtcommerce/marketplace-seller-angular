
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Api } from '../providers/api/api';
@Injectable({
  providedIn: 'root',
})
export class suppliersContactService extends Api {
  // for get method
  public params: any = {};
  // url
  private basUrl = this.getBaseUrl();

  //contactList
  public contactList(params): Observable<any> {
    return this.http.get(this.basUrl + '/supplier/contacts/list', { params: params });
  }

  /*  contactListCount*/
  public contactListCount(params): Observable<any> {
    return this.http.get(this.basUrl + '/supplier/contacts/list', { params: params });
  }


  /*addContact*/
  public addContact(params): Observable<any> {
    return this.http.post(this.basUrl + '/supplier/create-contact', params);
  }

  /*deleteContact*/
  public deleteContact(params): Observable<any> {
    return this.http.delete(this.basUrl + '/supplier/contact/' + params);
  }

  /*editContact*/
  public editContact(params): Observable<any> {
    return this.http.get(this.basUrl + '/supplier/contact/' + params);
  }

  /*updateContact*/
  public updateContact(params): Observable<any> {
    return this.http.put(this.basUrl + '/supplier/contact/' + params.id, params);
  }

  /*bulkExportContact*/
  public bulkExportContact(param): Observable<any> {


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
    return this.http.get(this.basUrl + '/supplier/export/supplier-contact/', reqOpts);
  }


  /*BulkDataDelete*/
  public BulkDataDelete(params): Observable<any> {
    const options = {
      body: params
    };
    return this.http.delete(this.basUrl + '/supplier/delete-multiple/contact', options);
  }


  /*  companyDetails*/
  public companyDetails(params): Observable<any> {
    return this.http.get(this.basUrl + '/supplier', { params: params });
  }

  /*  bulkStatusUpload*/
  public bulkStatusUpload(params): Observable<any> {
    return this.http.put(this.basUrl + '/supplier/contacts/status', params );
  }

}