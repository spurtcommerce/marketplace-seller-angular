import { createSelector } from 'reselect';
import * as fromsuppliersContact from './suppliersContact.reducer'
import { AppState } from '../../app.state.interface';

export const getProdState = (state: AppState) => state.supplierContact;

/*  contactList */
export const contactList = createSelector(
  getProdState,
  fromsuppliersContact.contactList
);
export const contactListLoading = createSelector(
  getProdState,
  fromsuppliersContact.contactListLoading
);
export const contactListLoaded = createSelector(
  getProdState,
  fromsuppliersContact.contactListLoaded
);
export const contactListFailed = createSelector(
  getProdState,
  fromsuppliersContact.contactListFailed
);


/* contactListCount*/
export const contactListCount = createSelector(
  getProdState,
  fromsuppliersContact.contactListCount
);
export const contactListCountLoading = createSelector(
  getProdState,
  fromsuppliersContact.contactListCountLoading
);
export const contactListCountLoaded = createSelector(
  getProdState,
  fromsuppliersContact.contactListCountLoaded
);
export const contactListCountFailed = createSelector(
  getProdState,
  fromsuppliersContact.contactListCountFailed
);

/* addContact*/
export const addContact = createSelector(
  getProdState,
  fromsuppliersContact.addContact
);
export const addContactLoading = createSelector(
  getProdState,
  fromsuppliersContact.addContactLoading
);
export const addContactLoaded = createSelector(
  getProdState,
  fromsuppliersContact.addContactLoaded
);
export const addContactFailed = createSelector(
  getProdState,
  fromsuppliersContact.addContactFailed
);


//deleteContact
export const deleteContact = createSelector(
  getProdState,
  fromsuppliersContact.deleteContact
);
export const deleteContactLoading = createSelector(
  getProdState,
  fromsuppliersContact.deleteContactLoading
);
export const deleteContactLoaded = createSelector(
  getProdState,
  fromsuppliersContact.deleteContactLoaded
);
export const deleteContactFailed = createSelector(
  getProdState,
  fromsuppliersContact.deleteContactFailed
);

/*editContact*/
export const editContact = createSelector(
  getProdState,
  fromsuppliersContact.editContact
);
export const editContactLoading = createSelector(
  getProdState,
  fromsuppliersContact.editContactLoading
);
export const editContactLoaded = createSelector(
  getProdState,
  fromsuppliersContact.editContactLoaded
);
export const editContactFailed = createSelector(
  getProdState,
  fromsuppliersContact.editContactFailed
);

/*updateContact*/
export const updateContact = createSelector(
  getProdState,
  fromsuppliersContact.updateContact
);
export const updateContactLoading = createSelector(
  getProdState,
  fromsuppliersContact.updateContactLoading
);
export const updateContactLoaded = createSelector(
  getProdState,
  fromsuppliersContact.updateContactLoaded
);
export const updateContactFailed = createSelector(
  getProdState,
  fromsuppliersContact.updateContactFailed
);

/*bulkExportContact*/
export const bulkExportContact = createSelector(
  getProdState,
  fromsuppliersContact.bulkExportContact
);
export const bulkExportContactLoading = createSelector(
  getProdState,
  fromsuppliersContact.bulkExportContactLoading
);
export const bulkExportContactLoaded = createSelector(
  getProdState,
  fromsuppliersContact.bulkExportContactLoaded
);
export const bulkExportContactFailed = createSelector(
  getProdState,
  fromsuppliersContact.bulkExportContactFailed
);

/*BulkDataDelete*/
export const BulkDataDelete = createSelector(
  getProdState,
  fromsuppliersContact.BulkDataDelete
);
export const BulkDataDeleteLoading = createSelector(
  getProdState,
  fromsuppliersContact.BulkDataDeleteLoading
);
export const BulkDataDeleteLoaded = createSelector(
  getProdState,
  fromsuppliersContact.BulkDataDeleteLoaded
);
export const BulkDataDeleteFailed = createSelector(
  getProdState,
  fromsuppliersContact.BulkDataDeleteFailed
);

/*companyDetails*/
export const companyDetails = createSelector(
  getProdState,
  fromsuppliersContact.companyDetails
);
export const companyDetailsLoading = createSelector(
  getProdState,
  fromsuppliersContact.companyDetailsLoading
);
export const companyDetailsLoaded = createSelector(
  getProdState,
  fromsuppliersContact.companyDetailsLoaded
);
export const companyDetailsFailed = createSelector(
  getProdState,
  fromsuppliersContact.companyDetailsFailed
);



/*bulkStatusUpload*/
export const bulkStatusUpload = createSelector(
  getProdState,
  fromsuppliersContact.bulkStatusUpload
);
export const bulkStatusUploadLoading = createSelector(
  getProdState,
  fromsuppliersContact.bulkStatusUploadLoading
);
export const bulkStatusUploadLoaded = createSelector(
  getProdState,
  fromsuppliersContact.bulkStatusUploadLoaded
);
export const bulkStatusUploadFailed = createSelector(
  getProdState,
  fromsuppliersContact.bulkStatusUploadFailed
);