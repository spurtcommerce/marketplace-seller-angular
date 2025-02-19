import { Injectable } from '@angular/core';
// store
import { Store } from '@ngrx/store';
// actions
// import * as RatingActions from './action/RatingReview.action';
// import * as Specificationaction from './action/suppliersManagement.action';
import * as suppliersManagementaction from './action/suppliersManagement.action'


// app state
import * as store from '../../../../src/app/core/app.state.interface';
// router
import { Subscription } from 'rxjs/index';
import {
  BulkDataDelete, BulkDataDeleteLoading, BulkDataDeleteLoaded, BulkDataDeleteFailed, suppliersList, suppliersListLoading, suppliersListLoaded, suppliersListFailed, suppliersListCount, suppliersListCountLoading, suppliersListCountLoaded, suppliersListCountFailed, addSuppliers, addSuppliersLoading, addSuppliersLoaded, addSuppliersFailed, deleteSuppliers, deleteSuppliersLoading, deleteSuppliersLoaded, deleteSuppliersFailed, editSuppliers, editSuppliersLoading, editSuppliersLoaded, editSuppliersFailed, updateSuppliers, updateSuppliersLoading, updateSuppliersLoaded, updateSuppliersFailed, bulkExportSupplier, bulkExportSupplierLoading, bulkExportSupplierLoaded, bulkExportSupplierFailed,
  countryList, countryListLoading, countryListLoaded, countryListFailed, categoryList, categoryListLoading, categoryListLoaded, categoryListFailed, documentType,
  documentTypeLoading, documentTypeLoaded, documentTypeFailed, documentUpload, documentUploadLoading, documentUploadLoaded, documentUploadFailed,
  bulkStatusUpload,bulkStatusUploadLoading,bulkStatusUploadLoaded,bulkStatusUploadFailed

} from './reducer/suppliersManagement.selector';

@Injectable()
export class suppliersManagementSandbox {
  constructor(
    protected appState: Store<store.AppState>,
  ) { }

  /*  suppliersList*/

  public suppliersList$ = this.appState.select(suppliersList);
  public suppliersListLoading$ = this.appState.select(suppliersListLoading);
  public suppliersListLoaded$ = this.appState.select(suppliersListLoaded);
  public suppliersListFailed$ = this.appState.select(suppliersListFailed);

  /*  suppliersListCount*/

  public suppliersListCount$ = this.appState.select(suppliersListCount);
  public suppliersListCountLoading$ = this.appState.select(suppliersListCountLoading);
  public suppliersListCountLoaded$ = this.appState.select(suppliersListCountLoaded);
  public suppliersListCountFailed$ = this.appState.select(suppliersListCountFailed);


  /* addSuppliers*/

  public addSuppliers$ = this.appState.select(addSuppliers);
  public addSuppliersLoading$ = this.appState.select(addSuppliersLoading);
  public addSuppliersLoaded$ = this.appState.select(addSuppliersLoaded);
  public addSuppliersFailed$ = this.appState.select(addSuppliersFailed);

  /*deleteSuppliers*/
  public deleteSuppliers$ = this.appState.select(deleteSuppliers);
  public deleteSuppliersLoading$ = this.appState.select(deleteSuppliersLoading);
  public deleteSuppliersLoaded$ = this.appState.select(deleteSuppliersLoaded);
  public deleteSuppliersFailed$ = this.appState.select(deleteSuppliersFailed);

  /*editSuppliers*/
  public editSuppliers$ = this.appState.select(editSuppliers);
  public editSuppliersLoading$ = this.appState.select(editSuppliersLoading);
  public editSuppliersLoaded$ = this.appState.select(editSuppliersLoaded);
  public editSuppliersFailed$ = this.appState.select(editSuppliersFailed);

  /*updateSuppliers*/
  public updateSuppliers$ = this.appState.select(updateSuppliers);
  public updateSuppliersLoading$ = this.appState.select(updateSuppliersLoading);
  public updateSuppliersLoaded$ = this.appState.select(updateSuppliersLoaded);
  public updateSuppliersFailed$ = this.appState.select(updateSuppliersFailed);

  /*bulkExportSupplier*/
  public bulkExportSupplier$ = this.appState.select(bulkExportSupplier);
  public bulkExportSupplierLoading$ = this.appState.select(bulkExportSupplierLoading);
  public bulkExportSupplierLoaded$ = this.appState.select(bulkExportSupplierLoaded);
  public bulkExportSupplierFailed$ = this.appState.select(bulkExportSupplierFailed);

  /*BulkDataDelete*/
  public BulkDataDelete$ = this.appState.select(BulkDataDelete);
  public BulkDataDeleteLoading$ = this.appState.select(BulkDataDeleteLoading);
  public BulkDataDeleteLoaded$ = this.appState.select(BulkDataDeleteLoaded);
  public BulkDataDeleteFailed$ = this.appState.select(BulkDataDeleteFailed);

  /*countryList*/
  public countryList$ = this.appState.select(countryList);
  public countryListLoading$ = this.appState.select(countryListLoading);
  public countryListLoaded$ = this.appState.select(countryListLoaded);
  public countryListFailed$ = this.appState.select(countryListFailed);

  /*categoryList*/
  public categoryList$ = this.appState.select(categoryList);
  public categoryListLoading$ = this.appState.select(categoryListLoading);
  public categoryListLoaded$ = this.appState.select(categoryListLoaded);
  public categoryListFailed$ = this.appState.select(categoryListFailed);

  /*documentType*/
  public documentType$ = this.appState.select(documentType);
  public documentTypeLoading$ = this.appState.select(documentTypeLoading);
  public documentTypeLoaded$ = this.appState.select(documentTypeLoaded);
  public documentTypeFailed$ = this.appState.select(documentTypeFailed);

  /*documentUpload*/
  public documentUpload$ = this.appState.select(documentUpload);
  public documentUploadLoading$ = this.appState.select(documentUploadLoading);
  public documentUploadLoaded$ = this.appState.select(documentUploadLoaded);
  public documentUploadFailed$ = this.appState.select(documentUploadFailed);

  /*bulkStatusUpload*/
  public bulkStatusUpload$ = this.appState.select(bulkStatusUpload);
  public bulkStatusUploadLoading$ = this.appState.select(bulkStatusUploadLoading);
  public bulkStatusUploadLoaded$ = this.appState.select(bulkStatusUploadLoaded);
  public bulkStatusUploadFailed$ = this.appState.select(bulkStatusUploadFailed);


  /*  suppliersList*/

  public suppliersList(value) {
    this.appState.dispatch(
      new suppliersManagementaction.suppliersListAction(value));
  }


  /*  suppliersListCount*/

  public suppliersListCount(value) {
    this.appState.dispatch(
      new suppliersManagementaction.suppliersListCountAction(value));
  }

  /* addSuppliers*/

  public addSuppliers(value) {
    this.appState.dispatch(
      new suppliersManagementaction.addSuppliersAction(value));
  }

  /*deleteSuppliers*/

  public deleteSuppliers(value) {
    this.appState.dispatch(
      new suppliersManagementaction.deleteSuppliersAction(value));
  }

  /*editSuppliers*/
  public editSuppliers(value) {
    this.appState.dispatch(
      new suppliersManagementaction.editSuppliersAction(value));
  }

  /*updateSuppliers*/
  public updateSuppliers(value) {
    this.appState.dispatch(
      new suppliersManagementaction.updateSuppliersAction(value));
  }

  /*bulkExportSupplier*/
  public bulkExportSupplier(value) {
    this.appState.dispatch(
      new suppliersManagementaction.bulkExportSupplierAction(value));
  }

  // BulkDataDelete
  public BulkDataDelete(value) {
    this.appState.dispatch(
      new suppliersManagementaction.BulkDataDeleteAction(value));
  }


  // countryList
  public countryList(value) {
    this.appState.dispatch(
      new suppliersManagementaction.countryListAction(value));
  }


  // categoryList
  public categoryList(value) {
    this.appState.dispatch(
      new suppliersManagementaction.categoryListAction(value));
  }

  // documentType
  public documentType(value) {
    this.appState.dispatch(
      new suppliersManagementaction.documentTypeAction(value));
  }

  // documentUpload
  public documentUpload(value) {
    this.appState.dispatch(
      new suppliersManagementaction.documentUploadAction(value));
  }

    // bulkStatusUpload
    public bulkStatusUpload(value) {
      this.appState.dispatch(
        new suppliersManagementaction.bulkStatusUploadAction(value));
    }


}