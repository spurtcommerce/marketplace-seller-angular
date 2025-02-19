import * as actions from '../export.action/export.action';
// state
import { ExportState, ExportStateRecord } from './export.state';

export const initialState: ExportState = new ExportStateRecord() as unknown as ExportState;

export function reducer(state = initialState, { type, payload }: any): ExportState {
  if (!type) {
    return state;
  }
  switch (type) {

    // getExportList
    case actions.ActionTypes.GET_EXPORT_LIST: {
      return Object.assign({}, state, {
        getExportListLoading: true,
        getExportListLoaded: false,
        getExportListFailed: false,
      });
    }

    case actions.ActionTypes.GET_EXPORT_LIST_SUCCESS: {
      return Object.assign({}, state, {
        getExportList: payload,
        getExportListLoading: false,
        getExportListLoaded: true,
        getExportListFailed: false,
      });
    }
    case actions.ActionTypes.GET_EXPORT_LIST_FAIL: {
      return Object.assign({}, state, {
        getExportListLoading: false,
        getExportListLoaded: false,
        getExportListFailed: true,
      });
    }

    // getModulesList
    case actions.ActionTypes.GET_MODULES_LIST: {
      return Object.assign({}, state, {
        getModulesListLoading: true,
        getModulesListLoaded: false,
        getModulesListFailed: false,
      });
    }

    case actions.ActionTypes.GET_MODULES_LIST_SUCCESS: {
      return Object.assign({}, state, {
        getModulesList: payload,
        getModulesListLoading: false,
        getModulesListLoaded: true,
        getModulesListFailed: false,
      });
    }
    case actions.ActionTypes.GET_MODULES_LIST_FAIL: {
      return Object.assign({}, state, {
        getModulesListLoading: false,
        getModulesListLoaded: false,
        getModulesListFailed: true,
      });
    }

    //getExportListCount
    case actions.ActionTypes.GET_EXPORT_LIST_COUNT: {
      return Object.assign({}, state, {
        getExportListCountLoading: true,
        getExportListCountLoaded: false,
        getExportListCountFailed: false,
      });
    }

    case actions.ActionTypes.GET_EXPORT_LIST_COUNT_SUCCESS: {
      return Object.assign({}, state, {
        getExportListCount: payload.data,
        getExportListCountLoading: false,
        getExportListCountLoaded: true,
        getExportListCountFailed: false,
      });
    }

    case actions.ActionTypes.GET_EXPORT_LIST_COUNT_FAIL: {
      return Object.assign({}, state, {
        getExportListCountLoading: false,
        getExportListCountLoaded: false,
        getExportListCountFailed: true,
      });
    }

    //getFromModule
    case actions.ActionTypes.GET_FROM_MODULE: {
      return Object.assign({}, state, {
        getFromModuleLoading: true,
        getFromModuleLoaded: false,
        getFromModuleFailed: false,
      });
    }

    case actions.ActionTypes.GET_FROM_MODULE_SUCCESS: {
      return Object.assign({}, state, {
        getFromModule: payload.data,
        getFromModuleLoading: false,
        getFromModuleLoaded: true,
        getFromModuleFailed: false,
      });
    }
    case actions.ActionTypes.GET_FROM_MODULE_FAIL: {
      return Object.assign({}, state, {
        getFromModuleLoading: false,
        getFromModuleLoaded: false,
        getFromModuleFailed: true,
      });
    }

    //downloadExcel
    case actions.ActionTypes.DOWNLOAD_EXCEL: {
      return Object.assign({}, state, {
        downloadExcelLoading: true,
        downloadExcelLoaded: false,
        downloadExcelFailed: false,
      });
    }

    case actions.ActionTypes.DOWNLOAD_EXCEL_SUCCESS: {
      return Object.assign({}, state, {
        downloadExcel: payload,
        downloadExcelLoading: false,
        downloadExcelLoaded: true,
        downloadExcelFailed: false,
      });
    }
    case actions.ActionTypes.DOWNLOAD_EXCEL_FAIL: {
      return Object.assign({}, state, {
        downloadExcelLoading: false,
        downloadExcelLoaded: false,
        downloadExcelFailed: true,
      });
    }

    //getProductId
    case actions.ActionTypes.GET_PRODUCT_ID: {
      return Object.assign({}, state, {
        getProductId:[],
        getProductIdLoading: true,
        getProductIdLoaded: false,
        getProductIdFailed: false,
      });
    }

    case actions.ActionTypes.GET_PRODUCT_ID_SUCCESS: {
      return Object.assign({}, state, {
        getProductId: payload,
        getProductIdLoading: false,
        getProductIdLoaded: true,
        getProductIdFailed: false,
      });
    }
    case actions.ActionTypes.GET_PRODUCT_ID_FAIL: {
      return Object.assign({}, state, {
        getProductIdLoading: false,
        getProductIdLoaded: false,
        getProductIdFailed: true,
      });
    }

    default: {
      return state;
    }
  }
}
export const getExportList = (state: ExportState) => state.getExportList;
export const getExportListLoading = (state: ExportState) => state.getExportListLoading;
export const getExportListLoaded = (state: ExportState) => state.getExportListLoaded;
export const getExportListFailed = (state: ExportState) => state.getExportListFailed;

export const getModulesList = (state: ExportState) => state.getModulesList;
export const getModulesListLoading = (state: ExportState) => state.getModulesListLoading;
export const getModulesListLoaded = (state: ExportState) => state.getModulesListLoaded;
export const getModulesListFailed = (state: ExportState) => state.getModulesListFailed;

export const getExportListCount = (state: ExportState) => state.getExportListCount;
export const getExportListCountLoading = (state: ExportState) => state.getExportListCountLoading;
export const getExportListCountLoaded = (state: ExportState) => state.getExportListCountLoaded;
export const getExportListCountFailed = (state: ExportState) => state.getExportListCountFailed;

export const getFromModule = (state: ExportState) => state.getFromModule;
export const getFromModuleLoading = (state: ExportState) => state.getFromModuleLoading;
export const getFromModuleLoaded = (state: ExportState) => state.getFromModuleLoaded;
export const getFromModuleFailed = (state: ExportState) => state.getFromModuleFailed;

export const downloadExcel = (state: ExportState) => state.downloadExcel;
export const downloadExcelLoading = (state: ExportState) => state.downloadExcelLoading;
export const downloadExcelLoaded = (state: ExportState) => state.downloadExcelLoaded;
export const downloadExcelFailed = (state: ExportState) => state.downloadExcelFailed;

export const getProductId = (state: ExportState) => state.getProductId;
export const getProductIdLoading = (state: ExportState) => state.getProductIdLoading;
export const getProductIdLoaded = (state: ExportState) => state.getProductIdLoaded;
export const getProductIdFailed = (state: ExportState) => state.getProductIdFailed;