import { Map, Record } from 'immutable';

export interface suppliersManagementState extends Map<string, any> {

  /*  suppliersList*/

  suppliersListLoading: boolean;
  suppliersListLoaded: boolean;
  suppliersListFailed: boolean;
  suppliersList: Array<any>;

  /* suppliersListCount*/

  suppliersListCountLoading: boolean;
  suppliersListCountLoaded: boolean;
  suppliersListCountFailed: boolean;
  suppliersListCount: Array<any>;


  /* addSuppliers*/

  addSuppliersLoading: boolean;
  addSuppliersLoaded: boolean;
  addSuppliersFailed: boolean;
  addSuppliers: Array<any>;


  /*deleteSuppliers*/

  deleteSuppliersLoading: boolean;
  deleteSuppliersLoaded: boolean;
  deleteSuppliersFailed: boolean;
  deleteSuppliers: Array<any>;

  /*editSuppliers*/
  editSuppliersLoading: boolean;
  editSuppliersLoaded: boolean;
  editSuppliersFailed: boolean;
  editSuppliers: Array<any>;

  /*updateSuppliers*/
  updateSuppliersLoading: boolean;
  updateSuppliersLoaded: boolean;
  updateSuppliersFailed: boolean;
  updateSuppliers: Array<any>;

  /*bulkExportSupplier*/
  bulkExportSupplierLoading: boolean;
  bulkExportSupplierLoaded: boolean;
  bulkExportSupplierFailed: boolean;
  bulkExportSupplier: Array<any>;

  /*BulkDataDelete*/
  BulkDataDeleteLoading: boolean;
  BulkDataDeleteLoaded: boolean;
  BulkDataDeleteFailed: boolean;
  BulkDataDelete: any;


  /*countryList*/
  countryListLoading: boolean;
  countryListLoaded: boolean;
  countryListFailed: boolean;
  countryList: any;

  /*categoryList*/
  categoryListLoading: boolean;
  categoryListLoaded: boolean;
  categoryListFailed: boolean;
  categoryList: any;

  /*documentType*/
  documentTypeLoading: boolean;
  documentTypeLoaded: boolean;
  documentTypeFailed: boolean;
  documentType: any;

  /*documentUpload*/
  documentUploadLoading: boolean;
  documentUploadLoaded: boolean;
  documentUploadFailed: boolean;
  documentUpload: any;

  /*bulkStatusUpload*/
  bulkStatusUploadLoading: boolean;
  bulkStatusUploadLoaded: boolean;
  bulkStatusUploadFailed: boolean;
  bulkStatusUpload: any;
}

export const suppliersManagementRecord = Record({

  /*  suppliersList*/

  suppliersList: {},
  suppliersListLoading: false,
  suppliersListLoaded: false,
  suppliersListFailed: false,

  /* suppliersListCount*/

  suppliersListCount: {},
  suppliersListCountLoading: false,
  suppliersListCountLoaded: false,
  suppliersListCountFailed: false,


  /* addSuppliers*/

  addSuppliers: {},
  addSuppliersLoading: false,
  addSuppliersLoaded: false,
  addSuppliersFailed: false,

  //deleteSuppliers
  deleteSuppliers: {},
  deleteSuppliersLoading: false,
  deleteSuppliersLoaded: false,
  deleteSuppliersFailed: false,

  /*editSuppliers*/
  editSuppliers: {},
  editSuppliersLoading: false,
  editSuppliersLoaded: false,
  editSuppliersFailed: false,

  /*updateSuppliers*/
  updateSuppliers: {},
  updateSuppliersLoading: false,
  updateSuppliersLoaded: false,
  updateSuppliersFailed: false,

  /*bulkExportSupplier*/
  bulkExportSupplier: {},
  bulkExportSupplierLoading: false,
  bulkExportSupplierLoaded: false,
  bulkExportSupplierFailed: false,

  /*BulkDataDelete*/
  BulkDataDelete: [],
  BulkDataDeleteLoading: false,
  BulkDataDeleteLoaded: false,
  BulkDataDeleteFailed: false,

  /*countryList*/
  countryList: [],
  countryListLoading: false,
  countryListLoaded: false,
  countryListFailed: false,


  /*categoryList*/
  categoryList: [],
  categoryListLoading: false,
  categoryListLoaded: false,
  categoryListFailed: false,

  /*documentType*/
  documentType: [],
  documentTypeLoading: false,
  documentTypeLoaded: false,
  documentTypeFailed: false,

  /*documentUpload*/
  documentUpload: [],
  documentUploadLoading: false,
  documentUploadLoaded: false,
  documentUploadFailed: false,

  /*bulkStatusUpload*/
  bulkStatusUpload: [],
  bulkStatusUploadLoading: false,
  bulkStatusUploadLoaded: false,
  bulkStatusUploadFailed: false,

});