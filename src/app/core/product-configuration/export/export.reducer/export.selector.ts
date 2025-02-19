import { createSelector } from 'reselect';
import * as fromExport from './export.reducer';
// app state
import { AppState } from '../../../app.state.interface';

export const getExportState = (state: AppState) => state.export;

// getExportList
export const getExportList = createSelector(getExportState, fromExport.getExportList);
export const getExportListLoading = createSelector(getExportState, fromExport.getExportListLoading);
export const getExportListLoaded = createSelector(getExportState, fromExport.getExportListLoaded);
export const getExportListFailed = createSelector(getExportState, fromExport.getExportListFailed);

// getModulesList
export const getModulesList = createSelector(getExportState, fromExport.getModulesList);
export const getModulesListLoading = createSelector(getExportState, fromExport.getModulesListLoading);
export const getModulesListLoaded = createSelector(getExportState, fromExport.getModulesListLoaded);
export const getModulesListFailed = createSelector(getExportState, fromExport.getModulesListFailed);

// getExportListCount
export const getExportListCount = createSelector(getExportState, fromExport.getExportListCount);
export const getExportListCountLoading = createSelector(getExportState, fromExport.getExportListCountLoading);
export const getExportListCountLoaded = createSelector(getExportState, fromExport.getExportListCountLoaded);
export const getExportListCountFailed = createSelector(getExportState, fromExport.getExportListCountFailed);

// getFromModule
export const getFromModule = createSelector(getExportState, fromExport.getFromModule);
export const getFromModuleLoading = createSelector(getExportState, fromExport.getFromModuleLoading);
export const getFromModuleLoaded = createSelector(getExportState, fromExport.getFromModuleLoaded);
export const getFromModuleFailed = createSelector(getExportState, fromExport.getFromModuleFailed);

// downloadExcel
export const downloadExcel = createSelector(getExportState, fromExport.downloadExcel);
export const downloadExcelLoading = createSelector(getExportState, fromExport.downloadExcelLoading);
export const downloadExcelLoaded = createSelector(getExportState, fromExport.downloadExcelLoaded);
export const downloadExcelFailed = createSelector(getExportState, fromExport.downloadExcelFailed);

// getProductId
export const getProductId = createSelector(getExportState, fromExport.getProductId);
export const getProductIdLoading = createSelector(getExportState, fromExport.getProductIdLoading);
export const getProductIdLoaded = createSelector(getExportState, fromExport.getProductIdLoaded);
export const getProductIdFailed = createSelector(getExportState, fromExport.getProductIdFailed);