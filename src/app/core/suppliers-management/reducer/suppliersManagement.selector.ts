import { createSelector } from 'reselect';
import * as fromsuppliersManagement from './suppliersManagement.reducer'
import { AppState } from '../../app.state.interface';

export const getProdState = (state: AppState) => state.supplierManagement;

/*  suppliersList */

export const suppliersList = createSelector(
  getProdState,
  fromsuppliersManagement.suppliersList
);
export const suppliersListLoading = createSelector(
  getProdState,
  fromsuppliersManagement.suppliersListLoading
);
export const suppliersListLoaded = createSelector(
  getProdState,
  fromsuppliersManagement.suppliersListLoaded
);
export const suppliersListFailed = createSelector(
  getProdState,
  fromsuppliersManagement.suppliersListFailed
);


/* suppliersListCount*/


export const suppliersListCount = createSelector(
  getProdState,
  fromsuppliersManagement.suppliersListCount
);
export const suppliersListCountLoading = createSelector(
  getProdState,
  fromsuppliersManagement.suppliersListCountLoading
);
export const suppliersListCountLoaded = createSelector(
  getProdState,
  fromsuppliersManagement.suppliersListCountLoaded
);
export const suppliersListCountFailed = createSelector(
  getProdState,
  fromsuppliersManagement.suppliersListCountFailed
);

/* addSuppliers*/

export const addSuppliers = createSelector(
  getProdState,
  fromsuppliersManagement.addSuppliers
);
export const addSuppliersLoading = createSelector(
  getProdState,
  fromsuppliersManagement.addSuppliersLoading
);
export const addSuppliersLoaded = createSelector(
  getProdState,
  fromsuppliersManagement.addSuppliersLoaded
);
export const addSuppliersFailed = createSelector(
  getProdState,
  fromsuppliersManagement.addSuppliersFailed
);


//deleteSuppliers
export const deleteSuppliers = createSelector(
  getProdState,
  fromsuppliersManagement.deleteSuppliers
);
export const deleteSuppliersLoading = createSelector(
  getProdState,
  fromsuppliersManagement.deleteSuppliersLoading
);
export const deleteSuppliersLoaded = createSelector(
  getProdState,
  fromsuppliersManagement.deleteSuppliersLoaded
);
export const deleteSuppliersFailed = createSelector(
  getProdState,
  fromsuppliersManagement.deleteSuppliersFailed
);

/*editSuppliers*/
export const editSuppliers = createSelector(
  getProdState,
  fromsuppliersManagement.editSuppliers
);
export const editSuppliersLoading = createSelector(
  getProdState,
  fromsuppliersManagement.editSuppliersLoading
);
export const editSuppliersLoaded = createSelector(
  getProdState,
  fromsuppliersManagement.editSuppliersLoaded
);
export const editSuppliersFailed = createSelector(
  getProdState,
  fromsuppliersManagement.editSuppliersFailed
);

/*updateSuppliers*/
export const updateSuppliers = createSelector(
  getProdState,
  fromsuppliersManagement.updateSuppliers
);
export const updateSuppliersLoading = createSelector(
  getProdState,
  fromsuppliersManagement.updateSuppliersLoading
);
export const updateSuppliersLoaded = createSelector(
  getProdState,
  fromsuppliersManagement.updateSuppliersLoaded
);
export const updateSuppliersFailed = createSelector(
  getProdState,
  fromsuppliersManagement.updateSuppliersFailed
);

/*bulkExportSupplier*/
export const bulkExportSupplier = createSelector(
  getProdState,
  fromsuppliersManagement.bulkExportSupplier
);
export const bulkExportSupplierLoading = createSelector(
  getProdState,
  fromsuppliersManagement.bulkExportSupplierLoading
);
export const bulkExportSupplierLoaded = createSelector(
  getProdState,
  fromsuppliersManagement.bulkExportSupplierLoaded
);
export const bulkExportSupplierFailed = createSelector(
  getProdState,
  fromsuppliersManagement.bulkExportSupplierFailed
);

/*BulkDataDelete*/
export const BulkDataDelete = createSelector(
  getProdState,
  fromsuppliersManagement.BulkDataDelete
);
export const BulkDataDeleteLoading = createSelector(
  getProdState,
  fromsuppliersManagement.BulkDataDeleteLoading
);
export const BulkDataDeleteLoaded = createSelector(
  getProdState,
  fromsuppliersManagement.BulkDataDeleteLoaded
);
export const BulkDataDeleteFailed = createSelector(
  getProdState,
  fromsuppliersManagement.BulkDataDeleteFailed
);

/*countryList*/
export const countryList = createSelector(
  getProdState,
  fromsuppliersManagement.countryList
);
export const countryListLoading = createSelector(
  getProdState,
  fromsuppliersManagement.countryListLoading
);
export const countryListLoaded = createSelector(
  getProdState,
  fromsuppliersManagement.countryListLoaded
);
export const countryListFailed = createSelector(
  getProdState,
  fromsuppliersManagement.countryListFailed
);

/*categoryList*/
export const categoryList = createSelector(
  getProdState,
  fromsuppliersManagement.categoryList
);
export const categoryListLoading = createSelector(
  getProdState,
  fromsuppliersManagement.categoryListLoading
);
export const categoryListLoaded = createSelector(
  getProdState,
  fromsuppliersManagement.categoryListLoaded
);
export const categoryListFailed = createSelector(
  getProdState,
  fromsuppliersManagement.categoryListFailed
);


/*documentType*/
export const documentType = createSelector(
  getProdState,
  fromsuppliersManagement.documentType
);
export const documentTypeLoading = createSelector(
  getProdState,
  fromsuppliersManagement.documentTypeLoading
);
export const documentTypeLoaded = createSelector(
  getProdState,
  fromsuppliersManagement.documentTypeLoaded
);
export const documentTypeFailed = createSelector(
  getProdState,
  fromsuppliersManagement.documentTypeFailed
);

/*documentUpload*/
export const documentUpload = createSelector(
  getProdState,
  fromsuppliersManagement.documentUpload
);
export const documentUploadLoading = createSelector(
  getProdState,
  fromsuppliersManagement.documentUploadLoading
);
export const documentUploadLoaded = createSelector(
  getProdState,
  fromsuppliersManagement.documentUploadLoaded
);
export const documentUploadFailed = createSelector(
  getProdState,
  fromsuppliersManagement.documentUploadFailed
);

/*bulkStatusUpload*/
export const bulkStatusUpload = createSelector(
  getProdState,
  fromsuppliersManagement.bulkStatusUpload
);
export const bulkStatusUploadLoading = createSelector(
  getProdState,
  fromsuppliersManagement.bulkStatusUploadLoading
);
export const bulkStatusUploadLoaded = createSelector(
  getProdState,
  fromsuppliersManagement.bulkStatusUploadLoaded
);
export const bulkStatusUploadFailed = createSelector(
  getProdState,
  fromsuppliersManagement.bulkStatusUploadFailed
);