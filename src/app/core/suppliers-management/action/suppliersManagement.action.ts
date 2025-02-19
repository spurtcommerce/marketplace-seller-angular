/*
* spurtcommerce
* http://www.spurtcommerce.com
*
* Copyright (c) 2024 Piccosoft Software Labs Pvt Ltd
* Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import { Action } from '@ngrx/store';
import { type } from '../../shared/utility/utilityHelpers';
// import { type } from '../../../../src/app/core/shared/utility/utilityHelpers';

export const ActionTypes = {

  /*  suppliersList  */

  SUPPLIERS_LIST: type('[suppliersManagement] suppliersList'),
  SUPPLIERS_LIST_SUCCESS: type('[suppliersManagement] suppliersList Success'),
  SUPPLIERS_LIST_FAIL: type('[suppliersManagement] suppliersList Fail'),

  /* suppliersListCount*/

  SUPPLIERS_LIST_COUNT: type('[suppliersManagement] suppliersListCount'),
  SUPPLIERS_LIST_COUNT_SUCCESS: type('[suppliersManagement] suppliersListCount Success'),
  SUPPLIERS_LIST_COUNT_FAIL: type('[suppliersManagement] suppliersListCount Fail'),

  /* addSuppliers*/
  ADD_SUPPLIERS: type('[suppliersManagement] addSuppliers'),
  ADD_SUPPLIERS_SUCCESS: type('[suppliersManagement] addSuppliers Success'),
  ADD_SUPPLIERS_FAIL: type('[suppliersManagement] addSuppliers Fail'),

  /*deleteSuppliers*/
  DELETE_SUPPLIERS: type('[suppliersManagement] deleteSuppliers'),
  DELETE_SUPPLIERS_SUCCESS: type('[suppliersManagement] deleteSuppliers Success'),
  DELETE_SUPPLIERS_FAIL: type('[suppliersManagement] deleteSuppliers Fail'),

  /*editSuppliers*/
  EDIT_SUPPLIERS: type('[suppliersManagement] editSuppliers'),
  EDIT_SUPPLIERS_SUCCESS: type('[suppliersManagement] editSuppliers Success'),
  EDIT_SUPPLIERS_FAIL: type('[suppliersManagement] editSuppliers Fail'),

  /*updateSuppliers*/
  UPDATE_SUPPLIERS: type('[suppliersManagement] updateSuppliers'),
  UPDATE_SUPPLIERS_SUCCESS: type('[suppliersManagement] updateSuppliers Success'),
  UPDATE_SUPPLIERS_FAIL: type('[suppliersManagement] updateSuppliers Fail'),

  /*bulkExportSupplier*/
  BULK_EXPORT_SUPPLIER: type('[suppliersManagement] bulkExportSupplier'),
  BULK_EXPORT_SUPPLIER_SUCCESS: type('[suppliersManagement] bulkExportSupplier Success'),
  BULK_EXPORT_SUPPLIER_FAIL: type('[suppliersManagement] bulkExportSupplier Fail'),

  /*BulkDataDelete*/
  BULK_DATA_DELETE: type('[suppliersManagement] BulkDataDelete'),
  BULK_DATA_DELETE_SUCCESS: type('[suppliersManagement] BulkDataDelete Success'),
  BULK_DATA_DELETE_FAIL: type('[suppliersManagement] BulkDataDelete Fail'),

  /*countryList*/
  COUNTRY_LIST: type('[suppliersManagement] countryList'),
  COUNTRY_LIST_SUCCESS: type('[suppliersManagement] countryList Success'),
  COUNTRY_LIST_FAIL: type('[suppliersManagement] countryList Fail'),

  /*categoryList*/
  CATEGORY_LIST: type('[suppliersManagement] categoryList'),
  CATEGORY_LIST_SUCCESS: type('[suppliersManagement] categoryList Success'),
  CATEGORY_LIST_FAIL: type('[suppliersManagement] categoryList Fail'),

  /*documentType*/
  DOCUMENT_TYPE: type('[suppliersManagement] documentType'),
  DOCUMENT_TYPE_SUCCESS: type('[suppliersManagement] documentType Success'),
  DOCUMENT_TYPE_FAIL: type('[suppliersManagement] documentType Fail'),

  /*documentUpload*/
  DOCUMENT_UPLOAD: type('[suppliersManagement] documentUpload'),
  DOCUMENT_UPLOAD_SUCCESS: type('[suppliersManagement] documentUpload Success'),
  DOCUMENT_UPLOAD_FAIL: type('[suppliersManagement] documentUpload Fail'),

  /*bulkStatusUpload*/
  BULK_STATUS_UPLOAD: type('[suppliersManagement] bulkStatusUpload'),
  BULK_STATUS_UPLOAD_SUCCESS: type('[suppliersManagement] bulkStatusUpload Success'),
  BULK_STATUS_UPLOAD_FAIL: type('[suppliersManagement] bulkStatusUpload Fail'),
}

/*  suppliersList */

export class suppliersListAction implements Action {
  type = ActionTypes.SUPPLIERS_LIST;
  constructor(public payload: any) { }
}

export class suppliersListSuccess implements Action {
  type = ActionTypes.SUPPLIERS_LIST_SUCCESS;
  constructor(public payload: any) { }
}

export class suppliersListFail implements Action {
  type = ActionTypes.SUPPLIERS_LIST_FAIL;
  constructor(public payload: any = null) { }
}


/*  suppliersListCount*/
export class suppliersListCountAction implements Action {
  type = ActionTypes.SUPPLIERS_LIST_COUNT;
  constructor(public payload: any) { }
}

export class suppliersListCountSuccess implements Action {
  type = ActionTypes.SUPPLIERS_LIST_COUNT_SUCCESS;
  constructor(public payload: any) { }
}

export class suppliersListCountFail implements Action {
  type = ActionTypes.SUPPLIERS_LIST_COUNT_FAIL;
  constructor(public payload: any = null) { }
}


/* addSuppliers*/
export class addSuppliersAction implements Action {
  type = ActionTypes.ADD_SUPPLIERS;
  constructor(public payload: any) { }
}

export class addSuppliersSuccess implements Action {
  type = ActionTypes.ADD_SUPPLIERS_SUCCESS;
  constructor(public payload: any) { }
}

export class addSuppliersFail implements Action {
  type = ActionTypes.ADD_SUPPLIERS_FAIL;
  constructor(public payload: any = null) { }
}


/*deleteSuppliers*/
export class deleteSuppliersAction implements Action {
  type = ActionTypes.DELETE_SUPPLIERS;
  constructor(public payload: any) { }
}

export class deleteSuppliersSuccess implements Action {
  type = ActionTypes.DELETE_SUPPLIERS_SUCCESS;
  constructor(public payload: any) { }
}

export class deleteSuppliersFail implements Action {
  type = ActionTypes.DELETE_SUPPLIERS_FAIL;
  constructor(public payload: any = null) { }
}

/*editSuppliers*/
export class editSuppliersAction implements Action {
  type = ActionTypes.EDIT_SUPPLIERS;
  constructor(public payload: any) { }
}

export class editSuppliersSuccess implements Action {
  type = ActionTypes.EDIT_SUPPLIERS_SUCCESS;
  constructor(public payload: any) { }
}

export class editSuppliersFail implements Action {
  type = ActionTypes.EDIT_SUPPLIERS_FAIL;
  constructor(public payload: any = null) { }
}

/*updateSuppliers*/
export class updateSuppliersAction implements Action {
  type = ActionTypes.UPDATE_SUPPLIERS;
  constructor(public payload: any) { }
}

export class updateSuppliersSuccess implements Action {
  type = ActionTypes.UPDATE_SUPPLIERS_SUCCESS;
  constructor(public payload: any) { }
}

export class updateSuppliersFail implements Action {
  type = ActionTypes.UPDATE_SUPPLIERS_FAIL;
  constructor(public payload: any = null) { }
}

/*bulkExportSupplier*/
export class bulkExportSupplierAction implements Action {
  type = ActionTypes.BULK_EXPORT_SUPPLIER;
  constructor(public payload: any) { }
}

export class bulkExportSupplierSuccess implements Action {
  type = ActionTypes.BULK_EXPORT_SUPPLIER_SUCCESS;
  constructor(public payload: any) { }
}

export class bulkExportSupplierFail implements Action {
  type = ActionTypes.BULK_EXPORT_SUPPLIER_FAIL;
  constructor(public payload: any = null) { }
}

/*BulkDataDelete*/
export class BulkDataDeleteAction implements Action {
  type = ActionTypes.BULK_DATA_DELETE;
  constructor(public payload: any) { }
}

export class BulkDataDeleteSuccess implements Action {
  type = ActionTypes.BULK_DATA_DELETE_SUCCESS;
  constructor(public payload: any) { }
}

export class BulkDataDeleteFail implements Action {
  type = ActionTypes.BULK_DATA_DELETE_FAIL;
  constructor(public payload: any = null) { }
}

/*countryList*/
export class countryListAction implements Action {
  type = ActionTypes.COUNTRY_LIST;
  constructor(public payload: any) { }
}

export class countryListSuccess implements Action {
  type = ActionTypes.COUNTRY_LIST_SUCCESS;
  constructor(public payload: any) { }
}

export class countryListFail implements Action {
  type = ActionTypes.COUNTRY_LIST_FAIL;
  constructor(public payload: any = null) { }
}


/*categoryList*/
export class categoryListAction implements Action {
  type = ActionTypes.CATEGORY_LIST;
  constructor(public payload: any) { }
}

export class categoryListSuccess implements Action {
  type = ActionTypes.CATEGORY_LIST_SUCCESS;
  constructor(public payload: any) { }
}

export class categoryListFail implements Action {
  type = ActionTypes.CATEGORY_LIST_FAIL;
  constructor(public payload: any = null) { }
}

/*documentType*/
export class documentTypeAction implements Action {
  type = ActionTypes.DOCUMENT_TYPE;
  constructor(public payload: any) { }
}

export class documentTypeSuccess implements Action {
  type = ActionTypes.DOCUMENT_TYPE_SUCCESS;
  constructor(public payload: any) { }
}

export class documentTypeFail implements Action {
  type = ActionTypes.DOCUMENT_TYPE_FAIL;
  constructor(public payload: any = null) { }
}


/*documentUpload*/
export class documentUploadAction implements Action {
  type = ActionTypes.DOCUMENT_UPLOAD;
  constructor(public payload: any) { }
}

export class documentUploadSuccess implements Action {
  type = ActionTypes.DOCUMENT_UPLOAD_SUCCESS;
  constructor(public payload: any) { }
}

export class documentUploadFail implements Action {
  type = ActionTypes.DOCUMENT_UPLOAD_FAIL;
  constructor(public payload: any = null) { }
}


/*bulkStatusUpload*/
export class bulkStatusUploadAction implements Action {
  type = ActionTypes.BULK_STATUS_UPLOAD;
  constructor(public payload: any) { }
}

export class bulkStatusUploadSuccess implements Action {
  type = ActionTypes.BULK_STATUS_UPLOAD_SUCCESS;
  constructor(public payload: any) { }
}

export class bulkStatusUploadFail implements Action {
  type = ActionTypes.BULK_STATUS_UPLOAD_FAIL;
  constructor(public payload: any = null) { }
}
