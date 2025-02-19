import { type } from '../../../shared/utility/utilityHelpers';
import { Action } from '@ngrx/store';

export const ActionTypes = {
  // getExportList
  GET_EXPORT_LIST: type('GET_EXPORT_LIST'),
  GET_EXPORT_LIST_SUCCESS: type('GET_EXPORT_LIST Success'),
  GET_EXPORT_LIST_FAIL: type('GET_EXPORT_LIST Fail'),

  // getModulesList
  GET_MODULES_LIST: type('GET_MODULES_LIST'),
  GET_MODULES_LIST_SUCCESS: type('GET_MODULES_LIST Success'),
  GET_MODULES_LIST_FAIL: type('GET_MODULES_LIST Fail'),

  // getExportListCount
  GET_EXPORT_LIST_COUNT: type('GET_EXPORT_LIST_COUNT'),
  GET_EXPORT_LIST_COUNT_SUCCESS: type('GET_EXPORT_LIST_COUNT Success'),
  GET_EXPORT_LIST_COUNT_FAIL: type('GET_EXPORT_LIST_COUNT Fail'),

  // getFromModule
  GET_FROM_MODULE: type('GET_FROM_MODULE'),
  GET_FROM_MODULE_SUCCESS: type('GET_FROM_MODULE Success'),
  GET_FROM_MODULE_FAIL: type('GET_FROM_MODULE Fail'),

  //  downloadExcel
  DOWNLOAD_EXCEL: type('DOWNLOAD_EXCEL'),
  DOWNLOAD_EXCEL_SUCCESS: type('DOWNLOAD_EXCEL Success'),
  DOWNLOAD_EXCEL_FAIL: type('DOWNLOAD_EXCEL Fail'),

  //  getProductId
  GET_PRODUCT_ID: type('GET_PRODUCT_ID'),
  GET_PRODUCT_ID_SUCCESS: type('GET_PRODUCT_ID Success'),
  GET_PRODUCT_ID_FAIL: type('GET_PRODUCT_ID Fail'),
}

// getExportList
export class getExportList implements Action {
  type = ActionTypes.GET_EXPORT_LIST;
  constructor(public payload: any) { }
}

export class getExportListSuccess implements Action {
  type = ActionTypes.GET_EXPORT_LIST_SUCCESS;
  constructor(public payload: any) { }
}

export class getExportListFail implements Action {
  type = ActionTypes.GET_EXPORT_LIST_FAIL;
  constructor(public payload: any = null) { }
}

// getModulesList
export class getModulesList implements Action {
  type = ActionTypes.GET_MODULES_LIST;
  constructor(public payload: any) { }
}

export class getModulesListSuccess implements Action {
  type = ActionTypes.GET_MODULES_LIST_SUCCESS;
  constructor(public payload: any) { }
}

export class getModulesListFail implements Action {
  type = ActionTypes.GET_MODULES_LIST_FAIL;
  constructor(public payload: any = null) { }
}

// getExportListCount
export class getExportListCount implements Action {
  type = ActionTypes.GET_EXPORT_LIST_COUNT;
  constructor(public payload: any) { }
}

export class getExportListCountSuccess implements Action {
  type = ActionTypes.GET_EXPORT_LIST_COUNT_SUCCESS;
  constructor(public payload: any) { }
}

export class getExportListCountFail implements Action {
  type = ActionTypes.GET_EXPORT_LIST_COUNT_FAIL;
  constructor(public payload: any = null) { }
}

// getFromModule
export class getFromModule implements Action {
  type = ActionTypes.GET_FROM_MODULE;
  constructor(public payload: any) { }
}

export class getFromModuleSuccess implements Action {
  type = ActionTypes.GET_FROM_MODULE_SUCCESS;
  constructor(public payload: any) { }
}

export class getFromModuleFail implements Action {
  type = ActionTypes.GET_FROM_MODULE_FAIL;
  constructor(public payload: any = null) { }
}

//  downloadExcel
export class downloadExcel implements Action {
  type = ActionTypes.DOWNLOAD_EXCEL;
  constructor(public payload: any) { }
}

export class  downloadExcelSuccess implements Action {
  type = ActionTypes.DOWNLOAD_EXCEL_SUCCESS;
  constructor(public payload: any) { }
}

export class downloadExcelFail implements Action {
  type = ActionTypes.DOWNLOAD_EXCEL_FAIL;
  constructor(public payload: any = null) { }
}

//  getProductId
export class getProductId implements Action {
  type = ActionTypes.GET_PRODUCT_ID;
  constructor(public payload: any) { }
}

export class getProductIdSuccess implements Action {
  type = ActionTypes.GET_PRODUCT_ID_SUCCESS;
  constructor(public payload: any) { }
}

export class getProductIdFail implements Action {
  type = ActionTypes.GET_PRODUCT_ID_FAIL;
  constructor(public payload: any = null) { }
}

export type Actions =
  | getExportList
  | getExportListSuccess
  | getExportListFail
  | getModulesList
  | getModulesListSuccess
  | getModulesListFail
  | getExportListCount
  | getExportListCountSuccess
  | getExportListCountFail
  | getFromModule
  | getFromModuleSuccess
  | getFromModuleFail
  | downloadExcel
  | downloadExcelSuccess
  | downloadExcelFail
  | getProductId
  | getProductIdSuccess
  | getProductIdFail