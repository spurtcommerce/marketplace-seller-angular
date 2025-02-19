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

import * as actions from '../action/suppliersManagement.action';
import { suppliersManagementRecord, suppliersManagementState } from './suppliersManagement.state';


export const initialState: suppliersManagementState = (new suppliersManagementRecord() as unknown) as suppliersManagementState;
export function reducer(
  state = initialState,
  { type, payload, payload2 }: any
): suppliersManagementState {
  if (!type) {
    return state;
  }
  switch (type) {

    /*  suppliersList */

    case actions.ActionTypes.SUPPLIERS_LIST: {
      return Object.assign({}, state, {
        suppliersList: '',
        suppliersListLoading: true,
        suppliersListLoaded: false,
        suppliersListFailed: false,
      });
    }
    case actions.ActionTypes.SUPPLIERS_LIST_SUCCESS: {
      return Object.assign({}, state, {
        suppliersList: payload.data,
        suppliersListLoading: false,
        suppliersListLoaded: true,
        suppliersListFailed: false,
      });
    }
    case actions.ActionTypes.SUPPLIERS_LIST_FAIL: {
      return Object.assign({}, state, {
        suppliersList: '',
        suppliersListLoading: false,
        suppliersListLoaded: false,
        suppliersListFailed: true,
      });
    }

    /* suppliersListCount*/

    case actions.ActionTypes.SUPPLIERS_LIST_COUNT: {
      return Object.assign({}, state, {
        suppliersListCount: '',
        suppliersListCountLoading: true,
        suppliersListCountLoaded: false,
        suppliersListCountFailed: false,
      });
    }
    case actions.ActionTypes.SUPPLIERS_LIST_COUNT_SUCCESS: {
      return Object.assign({}, state, {
        suppliersListCount: payload.data,
        suppliersListCountLoading: false,
        suppliersListCountLoaded: true,
        suppliersListCountFailed: false,
      });
    }
    case actions.ActionTypes.SUPPLIERS_LIST_COUNT_FAIL: {
      return Object.assign({}, state, {
        suppliersListCount: '',
        suppliersListCountLoading: false,
        suppliersListCountLoaded: false,
        suppliersListCountFailed: true,
      });
    }

    /* addSuppliers*/

    case actions.ActionTypes.ADD_SUPPLIERS: {
      return Object.assign({}, state, {
        addSuppliers: '',
        addSuppliersLoading: true,
        addSuppliersLoaded: false,
        addSuppliersFailed: false,
      });
    }
    case actions.ActionTypes.ADD_SUPPLIERS_SUCCESS: {
      return Object.assign({}, state, {
        addSuppliers: payload,
        addSuppliersLoading: false,
        addSuppliersLoaded: true,
        addSuppliersFailed: false,
      });
    }
    case actions.ActionTypes.ADD_SUPPLIERS_FAIL: {
      return Object.assign({}, state, {
        addSuppliers: '',
        addSuppliersLoading: false,
        addSuppliersLoaded: false,
        addSuppliersFailed: true,
      });
    }

    /*deleteSuppliers*/

    case actions.ActionTypes.DELETE_SUPPLIERS: {
      return Object.assign({}, state, {
        deleteSuppliers: '',
        deleteSuppliersLoading: true,
        deleteSuppliersLoaded: false,
        deleteSuppliersFailed: false,
      });
    }
    case actions.ActionTypes.DELETE_SUPPLIERS_SUCCESS: {
      return Object.assign({}, state, {
        deleteSuppliers: payload,
        deleteSuppliersLoading: false,
        deleteSuppliersLoaded: true,
        deleteSuppliersFailed: false,
      });
    }
    case actions.ActionTypes.DELETE_SUPPLIERS_FAIL: {
      return Object.assign({}, state, {
        deleteSuppliers: '',
        deleteSuppliersLoading: false,
        deleteSuppliersLoaded: false,
        deleteSuppliersFailed: true,
      });
    }

    /*editSuppliers*/
    case actions.ActionTypes.EDIT_SUPPLIERS: {
      return Object.assign({}, state, {
        editSuppliers: '',
        editSuppliersLoading: true,
        editSuppliersLoaded: false,
        editSuppliersFailed: false,
      });
    }
    case actions.ActionTypes.EDIT_SUPPLIERS_SUCCESS: {
      return Object.assign({}, state, {
        editSuppliers: payload,
        editSuppliersLoading: false,
        editSuppliersLoaded: true,
        editSuppliersFailed: false,
      });
    }
    case actions.ActionTypes.EDIT_SUPPLIERS_FAIL: {
      return Object.assign({}, state, {
        editSuppliers: '',
        editSuppliersLoading: false,
        editSuppliersLoaded: false,
        editSuppliersFailed: true,
      });
    }

    /*updateSuppliers*/
    case actions.ActionTypes.UPDATE_SUPPLIERS: {
      return Object.assign({}, state, {
        updateSuppliers: '',
        updateSuppliersLoading: true,
        updateSuppliersLoaded: false,
        updateSuppliersFailed: false,
      });
    }
    case actions.ActionTypes.UPDATE_SUPPLIERS_SUCCESS: {
      return Object.assign({}, state, {
        updateSuppliers: payload,
        updateSuppliersLoading: false,
        updateSuppliersLoaded: true,
        updateSuppliersFailed: false,
      });
    }
    case actions.ActionTypes.UPDATE_SUPPLIERS_FAIL: {
      return Object.assign({}, state, {
        updateSuppliers: '',
        updateSuppliersLoading: false,
        updateSuppliersLoaded: false,
        updateSuppliersFailed: true,
      });
    }

    /*bulkExportSupplier*/
    case actions.ActionTypes.BULK_EXPORT_SUPPLIER: {
      return Object.assign({}, state, {
        bulkExportSupplier: '',
        bulkExportSupplierLoading: true,
        bulkExportSupplierLoaded: false,
        bulkExportSupplierFailed: false,
      });
    }
    case actions.ActionTypes.BULK_EXPORT_SUPPLIER_SUCCESS: {
      return Object.assign({}, state, {
        bulkExportSupplier: payload,
        bulkExportSupplierLoading: false,
        bulkExportSupplierLoaded: true,
        bulkExportSupplierFailed: false,
      });
    }
    case actions.ActionTypes.BULK_EXPORT_SUPPLIER_FAIL: {
      return Object.assign({}, state, {
        bulkExportSupplier: '',
        bulkExportSupplierLoading: false,
        bulkExportSupplierLoaded: false,
        bulkExportSupplierFailed: true,
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

    /*countryList*/
    case actions.ActionTypes.COUNTRY_LIST: {
      return Object.assign({}, state, {
        countryList: '',
        countryListLoading: true,
        countryListLoaded: false,
        countryListFailed: false,
      });
    }
    case actions.ActionTypes.COUNTRY_LIST_SUCCESS: {
      return Object.assign({}, state, {
        countryList: payload,
        countryListLoading: false,
        countryListLoaded: true,
        countryListFailed: false,
      });
    }
    case actions.ActionTypes.COUNTRY_LIST_FAIL: {
      return Object.assign({}, state, {
        countryList: '',
        countryListLoading: false,
        countryListLoaded: false,
        countryListFailed: true,
      });
    }


    /*categoryList*/
    case actions.ActionTypes.CATEGORY_LIST: {
      return Object.assign({}, state, {
        categoryList: '',
        categoryListLoading: true,
        categoryListLoaded: false,
        categoryListFailed: false,
      });
    }
    case actions.ActionTypes.CATEGORY_LIST_SUCCESS: {
      return Object.assign({}, state, {
        categoryList: payload,
        categoryListLoading: false,
        categoryListLoaded: true,
        categoryListFailed: false,
      });
    }
    case actions.ActionTypes.CATEGORY_LIST_FAIL: {
      return Object.assign({}, state, {
        categoryList: '',
        categoryListLoading: false,
        categoryListLoaded: false,
        categoryListFailed: true,
      });
    }

    /*documentType*/
    case actions.ActionTypes.DOCUMENT_TYPE: {
      return Object.assign({}, state, {
        documentType: '',
        documentTypeLoading: true,
        documentTypeLoaded: false,
        documentTypeFailed: false,
      });
    }
    case actions.ActionTypes.DOCUMENT_TYPE_SUCCESS: {
      return Object.assign({}, state, {
        documentType: payload,
        documentTypeLoading: false,
        documentTypeLoaded: true,
        documentTypeFailed: false,
      });
    }
    case actions.ActionTypes.DOCUMENT_TYPE_FAIL: {
      return Object.assign({}, state, {
        documentType: '',
        documentTypeLoading: false,
        documentTypeLoaded: false,
        documentTypeFailed: true,
      });
    }

    /*documentUpload*/
    case actions.ActionTypes.DOCUMENT_UPLOAD: {
      return Object.assign({}, state, {
        documentUpload: '',
        documentUploadLoading: true,
        documentUploadLoaded: false,
        documentUploadFailed: false,
      });
    }
    case actions.ActionTypes.DOCUMENT_UPLOAD_SUCCESS: {
      return Object.assign({}, state, {
        documentUpload: payload,
        documentUploadLoading: false,
        documentUploadLoaded: true,
        documentUploadFailed: false,
      });
    }
    case actions.ActionTypes.DOCUMENT_UPLOAD_FAIL: {
      return Object.assign({}, state, {
        documentUpload: '',
        documentUploadLoading: false,
        documentUploadLoaded: false,
        documentUploadFailed: true,
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

/* suppliersList */

export const suppliersListLoading = (state: suppliersManagementState) => state.suppliersListLoading;
export const suppliersListLoaded = (state: suppliersManagementState) => state.suppliersListLoaded;
export const suppliersListFailed = (state: suppliersManagementState) => state.suppliersListFailed;
export const suppliersList = (state: suppliersManagementState) => state.suppliersList;

/*  suppliersListCount*/

export const suppliersListCountLoading = (state: suppliersManagementState) => state.suppliersListCountLoading;
export const suppliersListCountLoaded = (state: suppliersManagementState) => state.suppliersListCountLoaded;
export const suppliersListCountFailed = (state: suppliersManagementState) => state.suppliersListCountFailed;
export const suppliersListCount = (state: suppliersManagementState) => state.suppliersListCount;

/*addSuppliers*/

export const addSuppliersLoading = (state: suppliersManagementState) => state.addSuppliersLoading;
export const addSuppliersLoaded = (state: suppliersManagementState) => state.addSuppliersLoaded;
export const addSuppliersFailed = (state: suppliersManagementState) => state.addSuppliersFailed;
export const addSuppliers = (state: suppliersManagementState) => state.addSuppliers;

/*deleteSuppliers*/

export const deleteSuppliersLoading = (state: suppliersManagementState) => state.deleteSuppliersLoading;
export const deleteSuppliersLoaded = (state: suppliersManagementState) => state.deleteSuppliersLoaded;
export const deleteSuppliersFailed = (state: suppliersManagementState) => state.deleteSuppliersFailed;
export const deleteSuppliers = (state: suppliersManagementState) => state.deleteSuppliers;

/*editSuppliers*/
export const editSuppliersLoading = (state: suppliersManagementState) => state.editSuppliersLoading;
export const editSuppliersLoaded = (state: suppliersManagementState) => state.editSuppliersLoaded;
export const editSuppliersFailed = (state: suppliersManagementState) => state.editSuppliersFailed;
export const editSuppliers = (state: suppliersManagementState) => state.editSuppliers;


/*updateSuppliers*/
export const updateSuppliersLoading = (state: suppliersManagementState) => state.updateSuppliersLoading;
export const updateSuppliersLoaded = (state: suppliersManagementState) => state.updateSuppliersLoaded;
export const updateSuppliersFailed = (state: suppliersManagementState) => state.updateSuppliersFailed;
export const updateSuppliers = (state: suppliersManagementState) => state.updateSuppliers;

/*bulkExportSupplier*/
export const bulkExportSupplierLoading = (state: suppliersManagementState) => state.bulkExportSupplierLoading;
export const bulkExportSupplierLoaded = (state: suppliersManagementState) => state.bulkExportSupplierLoaded;
export const bulkExportSupplierFailed = (state: suppliersManagementState) => state.bulkExportSupplierFailed;
export const bulkExportSupplier = (state: suppliersManagementState) => state.bulkExportSupplier;

/*BulkDataDelete*/
export const BulkDataDeleteLoading = (state: suppliersManagementState) => state.BulkDataDeleteLoading;
export const BulkDataDeleteLoaded = (state: suppliersManagementState) => state.BulkDataDeleteLoaded;
export const BulkDataDeleteFailed = (state: suppliersManagementState) => state.BulkDataDeleteFailed;
export const BulkDataDelete = (state: suppliersManagementState) => state.BulkDataDelete;

/*countryList*/
export const countryListLoading = (state: suppliersManagementState) => state.countryListLoading;
export const countryListLoaded = (state: suppliersManagementState) => state.countryListLoaded;
export const countryListFailed = (state: suppliersManagementState) => state.countryListFailed;
export const countryList = (state: suppliersManagementState) => state.countryList;

/*categoryList*/
export const categoryListLoading = (state: suppliersManagementState) => state.categoryListLoading;
export const categoryListLoaded = (state: suppliersManagementState) => state.categoryListLoaded;
export const categoryListFailed = (state: suppliersManagementState) => state.categoryListFailed;
export const categoryList = (state: suppliersManagementState) => state.categoryList;


/*documentType*/
export const documentTypeLoading = (state: suppliersManagementState) => state.documentTypeLoading;
export const documentTypeLoaded = (state: suppliersManagementState) => state.documentTypeLoaded;
export const documentTypeFailed = (state: suppliersManagementState) => state.documentTypeFailed;
export const documentType = (state: suppliersManagementState) => state.documentType;


/*documentUpload*/
export const documentUploadLoading = (state: suppliersManagementState) => state.documentUploadLoading;
export const documentUploadLoaded = (state: suppliersManagementState) => state.documentUploadLoaded;
export const documentUploadFailed = (state: suppliersManagementState) => state.documentUploadFailed;
export const documentUpload = (state: suppliersManagementState) => state.documentUpload;


/*bulkStatusUpload*/
export const bulkStatusUploadLoading = (state: suppliersManagementState) => state.bulkStatusUploadLoading;
export const bulkStatusUploadLoaded = (state: suppliersManagementState) => state.bulkStatusUploadLoaded;
export const bulkStatusUploadFailed = (state: suppliersManagementState) => state.bulkStatusUploadFailed;
export const bulkStatusUpload = (state: suppliersManagementState) => state.bulkStatusUpload;