import { Map, Record } from 'immutable';

export interface suppliersContactState extends Map<string, any> {

  /*  contactList*/
  contactListLoading: boolean;
  contactListLoaded: boolean;
  contactListFailed: boolean;
  contactList: Array<any>;

  /* contactListCount*/
  contactListCountLoading: boolean;
  contactListCountLoaded: boolean;
  contactListCountFailed: boolean;
  contactListCount: Array<any>;


  /* addContact*/
  addContactLoading: boolean;
  addContactLoaded: boolean;
  addContactFailed: boolean;
  addContact: Array<any>;


  /*deleteContact*/
  deleteContactLoading: boolean;
  deleteContactLoaded: boolean;
  deleteContactFailed: boolean;
  deleteContact: Array<any>;

  /*editContact*/
  editContactLoading: boolean;
  editContactLoaded: boolean;
  editContactFailed: boolean;
  editContact: Array<any>;

  /*updateContact*/
  updateContactLoading: boolean;
  updateContactLoaded: boolean;
  updateContactFailed: boolean;
  updateContact: Array<any>;

  /*bulkExportContact*/
  bulkExportContactLoading: boolean;
  bulkExportContactLoaded: boolean;
  bulkExportContactFailed: boolean;
  bulkExportContact: Array<any>;

  /*BulkDataDelete*/
  BulkDataDeleteLoading: boolean;
  BulkDataDeleteLoaded: boolean;
  BulkDataDeleteFailed: boolean;
  BulkDataDelete: any;

  /*companyDetails*/
  companyDetailsLoading: boolean;
  companyDetailsLoaded: boolean;
  companyDetailsFailed: boolean;
  companyDetails: any;


  /*bulkStatusUpload*/
  bulkStatusUploadLoading: boolean;
  bulkStatusUploadLoaded: boolean;
  bulkStatusUploadFailed: boolean;
  bulkStatusUpload: any;
}

export const suppliersContactRecord = Record({

  /*  contactList*/
  contactList: {},
  contactListLoading: false,
  contactListLoaded: false,
  contactListFailed: false,

  /* contactListCount*/
  contactListCount: {},
  contactListCountLoading: false,
  contactListCountLoaded: false,
  contactListCountFailed: false,

  /* addContact*/
  addContact: {},
  addContactLoading: false,
  addContactLoaded: false,
  addContactFailed: false,

  // deleteContact
  deleteContact: {},
  deleteContactLoading: false,
  deleteContactLoaded: false,
  deleteContactFailed: false,

  /*editContact*/
  editContact: {},
  editContactLoading: false,
  editContactLoaded: false,
  editContactFailed: false,

  /*updateContact*/
  updateContact: {},
  updateContactLoading: false,
  updateContactLoaded: false,
  updateContactFailed: false,

  /*bulkExportContact*/
  bulkExportContact: {},
  bulkExportContactLoading: false,
  bulkExportContactLoaded: false,
  bulkExportContactFailed: false,

  /*BulkDataDelete*/
  BulkDataDelete: [],
  BulkDataDeleteLoading: false,
  BulkDataDeleteLoaded: false,
  BulkDataDeleteFailed: false,


  /*companyDetails*/
  companyDetails: [],
  companyDetailsLoading: false,
  companyDetailsLoaded: false,
  companyDetailsFailed: false,


  /*bulkStatusUpload*/
  bulkStatusUpload: [],
  bulkStatusUploadLoading: false,
  bulkStatusUploadLoaded: false,
  bulkStatusUploadFailed: false,
});