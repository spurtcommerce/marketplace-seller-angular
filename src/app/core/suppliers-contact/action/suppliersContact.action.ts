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

  /*  contactList  */
  CONTACT_LIST: type('[suppliersContact] contactList'),
  CONTACT_LIST_SUCCESS: type('[suppliersContact] contactList Success'),
  CONTACT_LIST_FAIL: type('[suppliersContact] contactList Fail'),

  /* getRolesListCount*/

  CONTACT_LIST_COUNT: type('[suppliersContact] contactListCount'),
  CONTACT_LIST_COUNT_SUCCESS: type('[suppliersContact] contactListCount Success'),
  CONTACT_LIST_COUNT_FAIL: type('[suppliersContact] contactListCount Fail'),

  /* addContact*/
  ADD_CONTACT: type('[suppliersContact] addContact'),
  ADD_CONTACT_SUCCESS: type('[suppliersContact] addContact Success'),
  ADD_CONTACT_FAIL: type('[suppliersContact] addContact Fail'),

  /*deleteContact*/
  DELETE_CONTACT: type('[suppliersContact] deleteContact'),
  DELETE_CONTACT_SUCCESS: type('[suppliersContact] deleteContact Success'),
  DELETE_CONTACT_FAIL: type('[suppliersContact] deleteContact Fail'),

  /*editContact*/
  EDIT_CONTACT: type('[suppliersContact] editContact'),
  EDIT_CONTACT_SUCCESS: type('[suppliersContact] editContact Success'),
  EDIT_CONTACT_FAIL: type('[suppliersContact] editContact Fail'),

  /*updateContact*/
  UPDATE_CONTACT: type('[suppliersContact] updateContact'),
  UPDATE_CONTACT_SUCCESS: type('[suppliersContact] updateContact Success'),
  UPDATE_CONTACT_FAIL: type('[suppliersContact] updateContact Fail'),

  /*bulkExportContact*/
  BULK_EXPORT_CONTACT: type('[suppliersContact] bulkExportContact'),
  BULK_EXPORT_CONTACT_SUCCESS: type('[suppliersContact] bulkExportContact Success'),
  BULK_EXPORT_CONTACT_FAIL: type('[suppliersContact] bulkExportContact Fail'),

  /*BulkDataDelete*/
  BULK_DATA_DELETE: type('[suppliersContact] BulkDataDelete'),
  BULK_DATA_DELETE_SUCCESS: type('[suppliersContact] BulkDataDelete Success'),
  BULK_DATA_DELETE_FAIL: type('[suppliersContact] BulkDataDelete Fail'),

  /*companyDetails*/
  COMPANY_DETAILS: type('[suppliersContact] companyDetails'),
  COMPANY_DETAILS_SUCCESS: type('[suppliersContact] companyDetails Success'),
  COMPANY_DETAILS_FAIL: type('[suppliersContact] companyDetails Fail'),


  /*bulkStatusUpload*/
  BULK_STATUS_UPLOAD: type('[suppliersContact] bulkStatusUpload'),
  BULK_STATUS_UPLOAD_SUCCESS: type('[suppliersContact] bulkStatusUpload Success'),
  BULK_STATUS_UPLOAD_FAIL: type('[suppliersContact] bulkStatusUpload Fail'),

}

/*  contactList */
export class contactListAction implements Action {
  type = ActionTypes.CONTACT_LIST;
  constructor(public payload: any) { }
}

export class contactListSuccess implements Action {
  type = ActionTypes.CONTACT_LIST_SUCCESS;
  constructor(public payload: any) { }
}

export class contactListFail implements Action {
  type = ActionTypes.CONTACT_LIST_FAIL;
  constructor(public payload: any = null) { }
}


/*  contactListCount*/
export class contactListCountAction implements Action {
  type = ActionTypes.CONTACT_LIST_COUNT;
  constructor(public payload: any) { }
}

export class contactListCountSuccess implements Action {
  type = ActionTypes.CONTACT_LIST_COUNT_SUCCESS;
  constructor(public payload: any) { }
}

export class contactListCountFail implements Action {
  type = ActionTypes.CONTACT_LIST_COUNT_FAIL;
  constructor(public payload: any = null) { }
}

/* addContact*/
export class addContactAction implements Action {
  type = ActionTypes.ADD_CONTACT;
  constructor(public payload: any) { }
}

export class addContactSuccess implements Action {
  type = ActionTypes.ADD_CONTACT_SUCCESS;
  constructor(public payload: any) { }
}

export class addContactFail implements Action {
  type = ActionTypes.ADD_CONTACT_FAIL;
  constructor(public payload: any = null) { }
}


/*deleteContact*/
export class deleteContactAction implements Action {
  type = ActionTypes.DELETE_CONTACT;
  constructor(public payload: any) { }
}

export class deleteContactSuccess implements Action {
  type = ActionTypes.DELETE_CONTACT_SUCCESS;
  constructor(public payload: any) { }
}

export class deleteContactFail implements Action {
  type = ActionTypes.DELETE_CONTACT_FAIL;
  constructor(public payload: any = null) { }
}

/*editContact*/
export class editContactAction implements Action {
  type = ActionTypes.EDIT_CONTACT;
  constructor(public payload: any) { }
}

export class editContactSuccess implements Action {
  type = ActionTypes.EDIT_CONTACT_SUCCESS;
  constructor(public payload: any) { }
}

export class editContactFail implements Action {
  type = ActionTypes.EDIT_CONTACT_FAIL;
  constructor(public payload: any = null) { }
}

/*updateContact*/
export class updateContactAction implements Action {
  type = ActionTypes.UPDATE_CONTACT;
  constructor(public payload: any) { }
}

export class updateContactSuccess implements Action {
  type = ActionTypes.UPDATE_CONTACT_SUCCESS;
  constructor(public payload: any) { }
}

export class updateContactFail implements Action {
  type = ActionTypes.UPDATE_CONTACT_FAIL;
  constructor(public payload: any = null) { }
}

/*bulkExportContact*/
export class bulkExportContactAction implements Action {
  type = ActionTypes.BULK_EXPORT_CONTACT;
  constructor(public payload: any) { }
}

export class bulkExportContactSuccess implements Action {
  type = ActionTypes.BULK_EXPORT_CONTACT_SUCCESS;
  constructor(public payload: any) { }
}

export class bulkExportContactFail implements Action {
  type = ActionTypes.BULK_EXPORT_CONTACT_FAIL;
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

/*companyDetails*/
export class companyDetailsAction implements Action {
  type = ActionTypes.COMPANY_DETAILS;
  constructor(public payload: any) { }
}

export class companyDetailsSuccess implements Action {
  type = ActionTypes.COMPANY_DETAILS_SUCCESS;
  constructor(public payload: any) { }
}

export class companyDetailsFail implements Action {
  type = ActionTypes.COMPANY_DETAILS_FAIL;
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

