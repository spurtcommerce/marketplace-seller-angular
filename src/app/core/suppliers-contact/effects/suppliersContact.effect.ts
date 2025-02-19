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
import * as store from '../../app.state.interface';
import { catchError } from 'rxjs/operators';
import * as actions from '../action/suppliersContact.action'
import { ToastrService } from 'ngx-toastr';
import { suppliersContactService } from '../suppliersContact.service';
import { saveAs } from 'file-saver';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable()
export class suppliersContactEffect {
  constructor(
    private action$: Actions,
    public snackBar: MatSnackBar,
    @Inject(PLATFORM_ID) private platformId: Object,
    public toaster: ToastrService,
    private service: suppliersContactService, private appState$: Store<store.AppState>
  ) { }

  /*  contactList */
  
  contactList$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.CONTACT_LIST),
    map((action: actions.contactListAction) => action.payload),
    switchMap(state => {
      return this.service.contactList(state).pipe(
        switchMap(user => [new actions.contactListSuccess(user)]),
        catchError(error => of(new actions.contactListFail(error)))
      );
    })
  ));

  /*  contactListCount*/
  
  contactListCount$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.CONTACT_LIST_COUNT),
    map((action: actions.contactListCountAction) => action.payload),
    switchMap(state => {
      return this.service.contactListCount(state).pipe(
        switchMap(user => [new actions.contactListCountSuccess(user)]),
        catchError(error => of(new actions.contactListCountFail(error)))
      );
    })
  ));

  /* addContact*/
  
  addContact$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.ADD_CONTACT),
    map((action: actions.addContactAction) => action.payload),
    switchMap(state => {
      return this.service.addContact(state).pipe(
        switchMap(user => [new actions.addContactSuccess(user)]),
        tap(data => {
          if (data) {
            this.toaster.success(data.payload['message']);
          }
        }),
        catchError(error => of(new actions.addContactFail(error)))
      );
    })
  ));

  /*deleteContact*/
  
  deleteContact$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.DELETE_CONTACT),
    map((action: actions.deleteContactAction) => action.payload),
    switchMap(state => {
      return this.service.deleteContact(state).pipe(
        switchMap(user => [new actions.deleteContactSuccess(user)]),
        catchError(error => of(new actions.deleteContactFail(error)))
      );
    })
  ));

  /*editContact*/
  
  editContact$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.EDIT_CONTACT),
    map((action: actions.editContactAction) => action.payload),
    switchMap(state => {
      return this.service.editContact(state).pipe(
        switchMap(user => [new actions.editContactSuccess(user)]),
        catchError(error => of(new actions.editContactFail(error)))
      );
    })
  ));

  /*updateContact*/
  
  updateContact$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.UPDATE_CONTACT),
    map((action: actions.updateContactAction) => action.payload),
    switchMap(state => {
      return this.service.updateContact(state).pipe(
        // tap(data => {
        //   const filename = 'product_list_' + Date.now() + '.xlsx';
        //   const blob = new Blob([data], { type: 'text/xlsx' });
        //   saveAs(blob, filename);
        // }),
        switchMap(list => [new actions.updateContactSuccess(list)]),
        catchError(error => of(new actions.updateContactFail(error)))
      );
    })
  ));

  //bulkExportContact
  
  bulkExportContact$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.BULK_EXPORT_CONTACT),
    map((action: actions.bulkExportContactAction) => action.payload),
    switchMap(state => {
      return this.service.bulkExportContact(state).pipe(
        tap(data => {
          const filename = 'SellerExcel_' + Date.now() + '.xlsx';
          const blob = new Blob([data], { type: 'text/xlsx' });
          saveAs(blob, filename);
        }),
        switchMap(list => [new actions.bulkExportContactSuccess(list)]),
        catchError(error => of(new actions.bulkExportContactFail(error)))
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

  /*companyDetails*/
  
  companyDetails$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.COMPANY_DETAILS),
    map((action: actions.companyDetailsAction) => action.payload),
    switchMap(state => {
      return this.service.companyDetails(state).pipe(
        switchMap(user => [new actions.companyDetailsSuccess(user)]),
        catchError(error => of(new actions.companyDetailsFail(error)))
      );
    })
  ));

  /*bulkStatusUpload*/
  
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