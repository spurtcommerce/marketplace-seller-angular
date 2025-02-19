import { Injectable } from '@angular/core';
// store
import { Store } from '@ngrx/store';
// actions
// import * as RatingActions from './action/RatingReview.action';
// import * as Specificationaction from './action/suppliersManagement.action';
import * as suppliersManagementaction from './action/suppliersContact.action'


// app state
import * as store from '../app.state.interface';
// router
import { Subscription } from 'rxjs/index';
import {
  addContact, addContactFailed, addContactLoaded, addContactLoading, bulkExportContact, bulkExportContactFailed, bulkExportContactLoaded, bulkExportContactLoading, deleteContact, deleteContactFailed, deleteContactLoaded, deleteContactLoading, editContact, editContactFailed, editContactLoaded, editContactLoading, contactListCount, contactListCountFailed, contactListCountLoaded, contactListCountLoading, updateContact, updateContactFailed, updateContactLoaded, updateContactLoading,
  BulkDataDelete, BulkDataDeleteLoading, BulkDataDeleteLoaded, BulkDataDeleteFailed, contactList, contactListLoading, contactListLoaded, contactListFailed,
  companyDetails, companyDetailsLoading, companyDetailsLoaded, companyDetailsFailed,
  bulkStatusUpload,bulkStatusUploadLoading,bulkStatusUploadLoaded,bulkStatusUploadFailed
} from './reducer/suppliersContact.selector';

@Injectable()
export class suppliersContactSandbox {
  constructor(
    protected appState: Store<store.AppState>,
  ) { }

  /*  contactList*/
  public contactList$ = this.appState.select(contactList);
  public contactListLoading$ = this.appState.select(contactListLoading);
  public contactListLoaded$ = this.appState.select(contactListLoaded);
  public contactListFailed$ = this.appState.select(contactListFailed);

  /*  contactListCount*/
  public contactListCount$ = this.appState.select(contactListCount);
  public contactListCountLoading$ = this.appState.select(contactListCountLoading);
  public contactListCountLoaded$ = this.appState.select(contactListCountLoaded);
  public contactListCountFailed$ = this.appState.select(contactListCountFailed);


  /* addContact*/
  public addContact$ = this.appState.select(addContact);
  public addContactLoading$ = this.appState.select(addContactLoading);
  public addContactLoaded$ = this.appState.select(addContactLoaded);
  public addContactFailed$ = this.appState.select(addContactFailed);

  /*deleteContact*/
  public deleteContact$ = this.appState.select(deleteContact);
  public deleteContactLoading$ = this.appState.select(deleteContactLoading);
  public deleteContactLoaded$ = this.appState.select(deleteContactLoaded);
  public deleteContactFailed$ = this.appState.select(deleteContactFailed);

  /*editContact*/
  public editContact$ = this.appState.select(editContact);
  public editContactLoading$ = this.appState.select(editContactLoading);
  public editContactLoaded$ = this.appState.select(editContactLoaded);
  public editContactFailed$ = this.appState.select(editContactFailed);

  /*updateContact*/
  public updateContact$ = this.appState.select(updateContact);
  public updateContactLoading$ = this.appState.select(updateContactLoading);
  public updateContactLoaded$ = this.appState.select(updateContactLoaded);
  public updateContactFailed$ = this.appState.select(updateContactFailed);

  /*bulkExportContact*/
  public bulkExportContact$ = this.appState.select(bulkExportContact);
  public bulkExportContactLoading$ = this.appState.select(bulkExportContactLoading);
  public bulkExportContactLoaded$ = this.appState.select(bulkExportContactLoaded);
  public bulkExportContactFailed$ = this.appState.select(bulkExportContactFailed);

  /*BulkDataDelete*/
  public BulkDataDelete$ = this.appState.select(BulkDataDelete);
  public BulkDataDeleteLoading$ = this.appState.select(BulkDataDeleteLoading);
  public BulkDataDeleteLoaded$ = this.appState.select(BulkDataDeleteLoaded);
  public BulkDataDeleteFailed$ = this.appState.select(BulkDataDeleteFailed);

  /*companyDetails*/
  public companyDetails$ = this.appState.select(companyDetails);
  public companyDetailsLoading$ = this.appState.select(companyDetailsLoading);
  public companyDetailsLoaded$ = this.appState.select(companyDetailsLoaded);
  public companyDetailsFailed$ = this.appState.select(companyDetailsFailed);

  /*bulkStatusUpload*/
  public bulkStatusUpload$ = this.appState.select(bulkStatusUpload);
  public bulkStatusUploadLoading$ = this.appState.select(bulkStatusUploadLoading);
  public bulkStatusUploadLoaded$ = this.appState.select(bulkStatusUploadLoaded);
  public bulkStatusUploadFailed$ = this.appState.select(bulkStatusUploadFailed);


  /*  contactList*/
  public contactList(value) {
    this.appState.dispatch(
      new suppliersManagementaction.contactListAction(value));
  }


  /*  contactListCount*/
  public contactListCount(value) {
    this.appState.dispatch(
      new suppliersManagementaction.contactListCountAction(value));
  }

  /* addContact*/
  public addContact(value) {
    this.appState.dispatch(
      new suppliersManagementaction.addContactAction(value));
  }

  /*deleteContact*/
  public deleteContact(value) {
    this.appState.dispatch(
      new suppliersManagementaction.deleteContactAction(value));
  }

  /*editContact*/
  public editContact(value) {
    this.appState.dispatch(
      new suppliersManagementaction.editContactAction(value));
  }

  /*updateContact*/
  public updateContact(value) {
    this.appState.dispatch(
      new suppliersManagementaction.updateContactAction(value));
  }

  /*bulkExportContact*/
  public bulkExportContact(value) {
    this.appState.dispatch(
      new suppliersManagementaction.bulkExportContactAction(value));
  }

  // BulkDataDelete
  public BulkDataDelete(value) {
    this.appState.dispatch(
      new suppliersManagementaction.BulkDataDeleteAction(value));
  }

  // companyDetails
  public companyDetails(value) {
    this.appState.dispatch(
      new suppliersManagementaction.companyDetailsAction(value));
  }

  // bulkStatusUpload
  public bulkStatusUpload(value) {
    this.appState.dispatch(
      new suppliersManagementaction.bulkStatusUploadAction(value));
  }

}