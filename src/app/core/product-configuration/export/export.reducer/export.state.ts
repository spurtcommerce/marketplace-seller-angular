import { Map, Record } from 'immutable';

export interface ExportState extends Map<string, any> {

    //getExportList
    getExportList: {},
    getExportListLoading: any,
    getExportListLoaded: any,
    getExportListFailed: any,

    //getModulesList
    getModulesList: {},
    getModulesListLoading: any,
    getModulesListLoaded: any,
    getModulesListFailed: any,

    //getExportListCount
    getExportListCount: any,
    getExportListCountLoading: any,
    getExportListCountLoaded: any,
    getExportListCountFailed: any,

    //getFromModule
    getFromModule: {},
    getFromModuleLoading: any,
    getFromModuleLoaded: any,
    getFromModuleFailed: any,

    //downloadExcel
    downloadExcel: {},
    downloadExcelLoading: any,
    downloadExcelLoaded: any,
    downloadExcelFailed: any,

    //getProductId
    getProductId: {},
    getProductIdLoading: any,
    getProductIdLoaded: any,
    getProductIdFailed: any,
}

export const ExportStateRecord = Record({

    // getExportList
    getExportList: {},
    getExportListLoading: false,
    getExportListLoaded: false,
    getExportListFailed: false,

    // getModulesList
    getModulesList: {},
    getModulesListLoading: false,
    getModulesListLoaded: false,
    getModulesListFailed: false,

    // getExportListCount
    getExportListCount: {},
    getExportListCountLoading: false,
    getExportListCountLoaded: false,
    getExportListCountFailed: false,

    // getFromModule
    getFromModule: {},
    getFromModuleLoading: false,
    getFromModuleLoaded: false,
    getFromModuleFailed: false,

    // downloadExcel
    downloadExcel: {},
    downloadExcelLoading: false,
    downloadExcelLoaded: false,
    downloadExcelFailed: false,

    // getProductId
    getProductId: {},
    getProductIdLoading: false,
    getProductIdLoaded: false,
    getProductIdFailed: false,
});