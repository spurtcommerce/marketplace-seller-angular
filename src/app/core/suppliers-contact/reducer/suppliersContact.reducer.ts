/*
* spurtcommerce
* http://www.spurtcommerce.com
*
* Copyright (c) 2024 Piccosoft Software Labs Pvt Ltd
* Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
// import * as actions from '../action/RatingReview.action';
// import { RatingReviewState, RatingReviewRecord } from './RatingReview.state';

import * as actions from '../action/suppliersContact.action';
import { suppliersContactRecord, suppliersContactState } from './suppliersContact.state';


export const initialState: suppliersContactState = (new suppliersContactRecord() as unknown) as suppliersContactState;
export function reducer(
  state = initialState,
  { type, payload, payload2 }: any
): suppliersContactState {
  if (!type) {
    return state;
  }
  switch (type) {

    /*  contactList */
    case actions.ActionTypes.CONTACT_LIST: {
      return Object.assign({}, state, {
        contactList: '',
        contactListLoading: true,
        contactListLoaded: false,
        contactListFailed: false,
      });
    }
    case actions.ActionTypes.CONTACT_LIST_SUCCESS: {
      return Object.assign({}, state, {
        contactList: payload.data,
        contactListLoading: false,
        contactListLoaded: true,
        contactListFailed: false,
      });
    }
    case actions.ActionTypes.CONTACT_LIST_FAIL: {
      return Object.assign({}, state, {
        contactList: '',
        contactListLoading: false,
        contactListLoaded: false,
        contactListFailed: true,
      });
    }

    /* contactListCount*/
    case actions.ActionTypes.CONTACT_LIST_COUNT: {
      return Object.assign({}, state, {
        contactListCount: '',
        contactListCountLoading: true,
        contactListCountLoaded: false,
        contactListCountFailed: false,
      });
    }
    case actions.ActionTypes.CONTACT_LIST_COUNT_SUCCESS: {
      return Object.assign({}, state, {
        contactListCount: payload.data,
        contactListCountLoading: false,
        contactListCountLoaded: true,
        contactListCountFailed: false,
      });
    }
    case actions.ActionTypes.CONTACT_LIST_COUNT_FAIL: {
      return Object.assign({}, state, {
        contactListCount: '',
        contactListCountLoading: false,
        contactListCountLoaded: false,
        contactListCountFailed: true,
      });
    }

    /* addContact*/
    case actions.ActionTypes.ADD_CONTACT: {
      return Object.assign({}, state, {
        addContact: '',
        addContactLoading: true,
        addContactLoaded: false,
        addContactFailed: false,
      });
    }
    case actions.ActionTypes.ADD_CONTACT_SUCCESS: {
      return Object.assign({}, state, {
        addContact: payload,
        addContactLoading: false,
        addContactLoaded: true,
        addContactFailed: false,
      });
    }
    case actions.ActionTypes.ADD_CONTACT_FAIL: {
      return Object.assign({}, state, {
        addContact: '',
        addContactLoading: false,
        addContactLoaded: false,
        addContactFailed: true,
      });
    }

    /*deleteContact*/
    case actions.ActionTypes.DELETE_CONTACT: {
      return Object.assign({}, state, {
        deleteContact: '',
        deleteContactLoading: true,
        deleteContactLoaded: false,
        deleteContactFailed: false,
      });
    }
    case actions.ActionTypes.DELETE_CONTACT_SUCCESS: {
      return Object.assign({}, state, {
        deleteContact: payload,
        deleteContactLoading: false,
        deleteContactLoaded: true,
        deleteContactFailed: false,
      });
    }
    case actions.ActionTypes.DELETE_CONTACT_FAIL: {
      return Object.assign({}, state, {
        deleteContact: '',
        deleteContactLoading: false,
        deleteContactLoaded: false,
        deleteContactFailed: true,
      });
    }

    /*editContact*/
    case actions.ActionTypes.EDIT_CONTACT: {
      return Object.assign({}, state, {
        editContact: '',
        editContactLoading: true,
        editContactLoaded: false,
        editContactFailed: false,
      });
    }
    case actions.ActionTypes.EDIT_CONTACT_SUCCESS: {
      return Object.assign({}, state, {
        editContact: payload,
        editContactLoading: false,
        editContactLoaded: true,
        editContactFailed: false,
      });
    }
    case actions.ActionTypes.EDIT_CONTACT_FAIL: {
      return Object.assign({}, state, {
        editContact: '',
        editContactLoading: false,
        editContactLoaded: false,
        editContactFailed: true,
      });
    }

    /*updateContact*/
    case actions.ActionTypes.UPDATE_CONTACT: {
      return Object.assign({}, state, {
        updateContact: '',
        updateContactLoading: true,
        updateContactLoaded: false,
        updateContactFailed: false,
      });
    }
    case actions.ActionTypes.UPDATE_CONTACT_SUCCESS: {
      return Object.assign({}, state, {
        updateContact: payload,
        updateContactLoading: false,
        updateContactLoaded: true,
        updateContactFailed: false,
      });
    }
    case actions.ActionTypes.UPDATE_CONTACT_FAIL: {
      return Object.assign({}, state, {
        updateContact: '',
        updateContactLoading: false,
        updateContactLoaded: false,
        updateContactFailed: true,
      });
    }

    /*bulkExportContact*/
    case actions.ActionTypes.BULK_EXPORT_CONTACT: {
      return Object.assign({}, state, {
        bulkExportContact: '',
        bulkExportContactLoading: true,
        bulkExportContactLoaded: false,
        bulkExportContactFailed: false,
      });
    }
    case actions.ActionTypes.BULK_EXPORT_CONTACT_SUCCESS: {
      return Object.assign({}, state, {
        bulkExportContact: payload,
        bulkExportContactLoading: false,
        bulkExportContactLoaded: true,
        bulkExportContactFailed: false,
      });
    }
    case actions.ActionTypes.BULK_EXPORT_CONTACT_FAIL: {
      return Object.assign({}, state, {
        bulkExportContact: '',
        bulkExportContactLoading: false,
        bulkExportContactLoaded: false,
        bulkExportContactFailed: true,
      });
    }

    /*BulkDataDelete*/
    case actions.ActionTypes.BULK_DATA_DELETE: {
      return Object.assign({}, state, {
        BulkDataDelete: '',
        BulkDataDeleteLoading: true,
        BulkDataDeleteLoaded: false,
        BulkDataDeleteFailed: false,
      });
    }
    case actions.ActionTypes.BULK_DATA_DELETE_SUCCESS: {
      return Object.assign({}, state, {
        BulkDataDelete: payload,
        BulkDataDeleteLoading: false,
        BulkDataDeleteLoaded: true,
        BulkDataDeleteFailed: false,
      });
    }
    case actions.ActionTypes.BULK_DATA_DELETE_FAIL: {
      return Object.assign({}, state, {
        BulkDataDelete: '',
        BulkDataDeleteLoading: false,
        BulkDataDeleteLoaded: false,
        BulkDataDeleteFailed: true,
      });
    }


    /*companyDetails*/
    case actions.ActionTypes.COMPANY_DETAILS: {
      return Object.assign({}, state, {
        companyDetails: '',
        companyDetailsLoading: true,
        companyDetailsLoaded: false,
        companyDetailsFailed: false,
      });
    }
    case actions.ActionTypes.COMPANY_DETAILS_SUCCESS: {
      return Object.assign({}, state, {
        companyDetails: payload,
        companyDetailsLoading: false,
        companyDetailsLoaded: true,
        companyDetailsFailed: false,
      });
    }
    case actions.ActionTypes.COMPANY_DETAILS_FAIL: {
      return Object.assign({}, state, {
        companyDetails: '',
        companyDetailsLoading: false,
        companyDetailsLoaded: false,
        companyDetailsFailed: true,
      });
    }

    /*bulkStatusUpload*/
    case actions.ActionTypes.BULK_STATUS_UPLOAD: {
      return Object.assign({}, state, {
        bulkStatusUpload: '',
        bulkStatusUploadLoading: true,
        bulkStatusUploadLoaded: false,
        bulkStatusUploadFailed: false,
      });
    }
    case actions.ActionTypes.BULK_STATUS_UPLOAD_SUCCESS: {
      return Object.assign({}, state, {
        bulkStatusUpload: payload,
        bulkStatusUploadLoading: false,
        bulkStatusUploadLoaded: true,
        bulkStatusUploadFailed: false,
      });
    }
    case actions.ActionTypes.BULK_STATUS_UPLOAD_FAIL: {
      return Object.assign({}, state, {
        bulkStatusUpload: '',
        bulkStatusUploadLoading: false,
        bulkStatusUploadLoaded: false,
        bulkStatusUploadFailed: true,
      });
    }
    default: {
      return state;
    }
  }
}

/* contactList */
export const contactListLoading = (state: suppliersContactState) => state.contactListLoading;
export const contactListLoaded = (state: suppliersContactState) => state.contactListLoaded;
export const contactListFailed = (state: suppliersContactState) => state.contactListFailed;
export const contactList = (state: suppliersContactState) => state.contactList;

/*  contactListCount*/
export const contactListCountLoading = (state: suppliersContactState) => state.contactListCountLoading;
export const contactListCountLoaded = (state: suppliersContactState) => state.contactListCountLoaded;
export const contactListCountFailed = (state: suppliersContactState) => state.contactListCountFailed;
export const contactListCount = (state: suppliersContactState) => state.contactListCount;

/*addContact*/
export const addContactLoading = (state: suppliersContactState) => state.addContactLoading;
export const addContactLoaded = (state: suppliersContactState) => state.addContactLoaded;
export const addContactFailed = (state: suppliersContactState) => state.addContactFailed;
export const addContact = (state: suppliersContactState) => state.addContact;

/*deleteContact*/
export const deleteContactLoading = (state: suppliersContactState) => state.deleteContactLoading;
export const deleteContactLoaded = (state: suppliersContactState) => state.deleteContactLoaded;
export const deleteContactFailed = (state: suppliersContactState) => state.deleteContactFailed;
export const deleteContact = (state: suppliersContactState) => state.deleteContact;

/*editContact*/
export const editContactLoading = (state: suppliersContactState) => state.editContactLoading;
export const editContactLoaded = (state: suppliersContactState) => state.editContactLoaded;
export const editContactFailed = (state: suppliersContactState) => state.editContactFailed;
export const editContact = (state: suppliersContactState) => state.editContact;


/*updateContact*/
export const updateContactLoading = (state: suppliersContactState) => state.updateContactLoading;
export const updateContactLoaded = (state: suppliersContactState) => state.updateContactLoaded;
export const updateContactFailed = (state: suppliersContactState) => state.updateContactFailed;
export const updateContact = (state: suppliersContactState) => state.updateContact;

/*bulkExportContact*/
export const bulkExportContactLoading = (state: suppliersContactState) => state.bulkExportContactLoading;
export const bulkExportContactLoaded = (state: suppliersContactState) => state.bulkExportContactLoaded;
export const bulkExportContactFailed = (state: suppliersContactState) => state.bulkExportContactFailed;
export const bulkExportContact = (state: suppliersContactState) => state.bulkExportContact;

/*BulkDataDelete*/
export const BulkDataDeleteLoading = (state: suppliersContactState) => state.BulkDataDeleteLoading;
export const BulkDataDeleteLoaded = (state: suppliersContactState) => state.BulkDataDeleteLoaded;
export const BulkDataDeleteFailed = (state: suppliersContactState) => state.BulkDataDeleteFailed;
export const BulkDataDelete = (state: suppliersContactState) => state.BulkDataDelete;

/*companyDetails*/
export const companyDetailsLoading = (state: suppliersContactState) => state.companyDetailsLoading;
export const companyDetailsLoaded = (state: suppliersContactState) => state.companyDetailsLoaded;
export const companyDetailsFailed = (state: suppliersContactState) => state.companyDetailsFailed;
export const companyDetails = (state: suppliersContactState) => state.companyDetails;


/*bulkStatusUpload*/
export const bulkStatusUploadLoading = (state: suppliersContactState) => state.bulkStatusUploadLoading;
export const bulkStatusUploadLoaded = (state: suppliersContactState) => state.bulkStatusUploadLoaded;
export const bulkStatusUploadFailed = (state: suppliersContactState) => state.bulkStatusUploadFailed;
export const bulkStatusUpload = (state: suppliersContactState) => state.bulkStatusUpload;


