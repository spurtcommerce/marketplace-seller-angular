/*
* spurtcommerce
* http://www.spurtcommerce.com
*
* Copyright (c) 2024 Piccosoft Software Labs Pvt Ltd
* Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as store from '../../../../../src/app/core/app.state.interface';
import { catchError } from 'rxjs/operators';
import * as actions from '../action/suppliersManagement.action'
import { ToastrService } from 'ngx-toastr';
import { suppliersManagementService } from '../suppliersManagement.service';
import { saveAs } from 'file-saver';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable()
export class suppliersManagementEffect {
  constructor(
    private action$: Actions,
    public snackBar: MatSnackBar,
    @Inject(PLATFORM_ID) private platformId: Object,
    public toaster: ToastrService,
    private service: suppliersManagementService, private appState$: Store<store.AppState>
  ) { }

  /*  suppliersList */

  
  suppliersList$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.SUPPLIERS_LIST),
    map((action: actions.suppliersListAction) => action.payload),
    switchMap(state => {
      return this.service.suppliersList(state).pipe(
        switchMap(user => [new actions.suppliersListSuccess(user)]),
        catchError(error => of(new actions.suppliersListFail(error)))
      );
    })
  ));

  /*  suppliersListCount*/

  
  suppliersListCount$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.SUPPLIERS_LIST_COUNT),
    map((action: actions.suppliersListCountAction) => action.payload),
    switchMap(state => {
      return this.service.suppliersListCount(state).pipe(
        switchMap(user => [new actions.suppliersListCountSuccess(user)]),
        catchError(error => of(new actions.suppliersListCountFail(error)))
      );
    })
  ));

  /* addSuppliers*/
  
  addSuppliers$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.ADD_SUPPLIERS),
    map((action: actions.addSuppliersAction) => action.payload),
    switchMap(state => {
      return this.service.addSuppliers(state).pipe(
        switchMap(user => [new actions.addSuppliersSuccess(user)]),
        tap(data => {
          if (data) {
            this.toaster.success(data.payload['message']);
          }
        }),
        catchError(error => of(new actions.addSuppliersFail(error)))
      );
    })
  ));

  /*deleteSuppliers*/
  
  deleteSuppliers$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.DELETE_SUPPLIERS),
    map((action: actions.deleteSuppliersAction) => action.payload),
    switchMap(state => {
      return this.service.deleteSuppliers(state).pipe(
        switchMap(user => [new actions.deleteSuppliersSuccess(user)]),
        catchError(error => of(new actions.deleteSuppliersFail(error)))
      );
    })
  ));

  /*editSuppliers*/
  
  editSuppliers$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.EDIT_SUPPLIERS),
    map((action: actions.editSuppliersAction) => action.payload),
    switchMap(state => {
      return this.service.editSuppliers(state).pipe(
        switchMap(user => [new actions.editSuppliersSuccess(user)]),
        catchError(error => of(new actions.editSuppliersFail(error)))
      );
    })
  ));

  /*updateSuppliers*/
  
  updateSuppliers$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.UPDATE_SUPPLIERS),
    map((action: actions.updateSuppliersAction) => action.payload),
    switchMap(state => {
      return this.service.updateSuppliers(state).pipe(
        // tap(data => {
        //   const filename = 'product_list_' + Date.now() + '.xlsx';
        //   const blob = new Blob([data], { type: 'text/xlsx' });
        //   saveAs(blob, filename);
        // }),
        switchMap(list => [new actions.updateSuppliersSuccess(list)]),
        catchError(error => of(new actions.updateSuppliersFail(error)))
      );
    })
  ));

  //bulkExportSupplier
  
  bulkExportSupplier$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.BULK_EXPORT_SUPPLIER),
    map((action: actions.bulkExportSupplierAction) => action.payload),
    switchMap(state => {
      return this.service.bulkExportSupplier(state).pipe(
        tap(data => {
          const filename = 'SellerExcel_' + Date.now() + '.xlsx';
          const blob = new Blob([data], { type: 'text/xlsx' });
          saveAs(blob, filename);
        }),
        switchMap(list => [new actions.bulkExportSupplierSuccess(list)]),
        catchError(error => of(new actions.bulkExportSupplierFail(error)))
      );
    })
  ));


  /*BulkDataDelete*/
  
  BulkDataDelete$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.BULK_DATA_DELETE),
    map((action: actions.BulkDataDeleteAction) => action.payload),
    switchMap(state => {
      return this.service.BulkDataDelete(state).pipe(
        switchMap(user => [new actions.BulkDataDeleteSuccess(user)]),
        catchError(error => of(new actions.BulkDataDeleteFail(error)))
      );
    })
  ));

  /*  countryList */

  
  countryList$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.COUNTRY_LIST),
    map((action: actions.countryListAction) => action.payload),
    switchMap(state => {
      return this.service.countryList(state).pipe(
        switchMap(user => [new actions.countryListSuccess(user)]),
        catchError(error => of(new actions.countryListFail(error)))
      );
    })
  ));

  /*  categoryList */

  
  categoryList$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.CATEGORY_LIST),
    map((action: actions.categoryListAction) => action.payload),
    switchMap(state => {
      return this.service.categoryList(state).pipe(
        switchMap(user => [new actions.categoryListSuccess(user)]),
        catchError(error => of(new actions.categoryListFail(error)))
      );
    })
  ));

  /*  documentType */

  
  documentType$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.DOCUMENT_TYPE),
    map((action: actions.documentTypeAction) => action.payload),
    switchMap(state => {
      return this.service.documentType(state).pipe(
        switchMap(user => [new actions.documentTypeSuccess(user)]),
        catchError(error => of(new actions.documentTypeFail(error)))
      );
    })
  ));

  /*  documentUpload */

  
  documentUpload$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.DOCUMENT_UPLOAD),
    map((action: actions.documentUploadAction) => action.payload),
    switchMap(state => {
      return this.service.documentUpload(state).pipe(
        switchMap(user => [new actions.documentUploadSuccess(user)]),
        catchError(error => of(new actions.documentUploadFail(error)))
      );
    })
  ));

  /*  bulkStatusUpload */

  
  bulkStatusUpload$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.BULK_STATUS_UPLOAD),
    map((action: actions.bulkStatusUploadAction) => action.payload),
    switchMap(state => {
      return this.service.bulkStatusUpload(state).pipe(
        switchMap(user => [new actions.bulkStatusUploadSuccess(user)]),
        catchError(error => of(new actions.bulkStatusUploadFail(error)))
      );
    })
  ));
}