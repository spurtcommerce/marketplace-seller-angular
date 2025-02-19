import { Injectable } from '@angular/core';
// store
import { Store } from '@ngrx/store';
// app state
import * as store from '../../app.state.interface';
// action
import * as exportActions from './export.action/export.action'
// selectors
import {
  getExportList, getExportListFailed, getExportListLoaded, getExportListLoading,
  getModulesList, getModulesListFailed, getModulesListLoaded, getModulesListLoading,
  getExportListCount, getExportListCountLoading, getExportListCountLoaded, getExportListCountFailed,
  getFromModule, getFromModuleLoading, getFromModuleLoaded, getFromModuleFailed,
  downloadExcel, downloadExcelLoading, downloadExcelLoaded, downloadExcelFailed,
  getProductId, getProductIdLoading, getProductIdLoaded, getProductIdFailed
} from './export.reducer/export.selector';

@Injectable()
export class ExportSandbox {

  //getExportList
  public getExportList$ = this.appState.select(getExportList);
  public getExportListLoading = this.appState.select(getExportListLoading);
  public getExportListLoaded = this.appState.select(getExportListLoaded);
  public getExportListFailed = this.appState.select(getExportListFailed);

  //getModulesList
  public getModulesList$ = this.appState.select(getModulesList);
  public getModulesListLoading = this.appState.select(getModulesListLoading);
  public getModulesListLoaded = this.appState.select(getModulesListLoaded);
  public getModulesListFailed = this.appState.select(getModulesListFailed);


  // getExportListCount
  public getExportListCount$ = this.appState.select(getExportListCount);
  public getExportListCountLoading = this.appState.select(getExportListCountLoading);
  public getExportListCountLoaded = this.appState.select(getExportListCountLoaded);
  public getExportListCountFailed = this.appState.select(getExportListCountFailed);

  // getFromModule
  public getFromModule$ = this.appState.select(getFromModule);
  public getFromModuleLoading = this.appState.select(getFromModuleLoading);
  public getFromModuleLoaded = this.appState.select(getFromModuleLoaded);
  public getFromModuleFailed = this.appState.select(getFromModuleFailed);
  
  // downloadExcel
  public downloadExcel$ = this.appState.select(downloadExcel);
  public downloadExcelLoading = this.appState.select(downloadExcelLoading);
  public downloadExcelLoaded = this.appState.select(downloadExcelLoaded);
  public downloadExcelFailed = this.appState.select(downloadExcelFailed);

   // getProductId
   public getProductId$ = this.appState.select(getProductId);
   public getProductIdLoading = this.appState.select(getProductIdLoading);
   public getProductIdLoaded = this.appState.select(getProductIdLoaded);
   public getProductIdFailed = this.appState.select(getProductIdFailed);
 
  constructor(protected appState: Store<store.AppState>) { }

  public getExportList(data) {
    this.appState.dispatch(new exportActions.getExportList(data));
  }

  public getModulesList(data) {
    this.appState.dispatch(new exportActions.getModulesList(data));
  }

  public getExportListCount(data) {
    this.appState.dispatch(new exportActions.getExportListCount(data));
  }

  public getFromModule(data) {
    this.appState.dispatch(new exportActions.getFromModule(data));
  }

  public downloadExcel(data){
    this.appState.dispatch(new exportActions.downloadExcel(data));
  }

  public getProductId(data){
    this.appState.dispatch(new exportActions.getProductId(data));
  }
}
