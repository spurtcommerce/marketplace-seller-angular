import { Injectable } from '@angular/core';
// effects
import { createEffect, Actions, ofType } from '@ngrx/effects';
// store
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { saveAs } from 'file-saver';


// actions
import * as actions from '../export.action/export.action';
import { catchError } from 'rxjs/operators';
// service
import { ExportService } from '../export.service';
import { Router } from '@angular/router';

@Injectable()
export class ExportEffects {

  constructor(private action$: Actions,
    private apiCli: ExportService,
    private route: Router) { }

  //  getExportList

  
  getExportList$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.GET_EXPORT_LIST),
    map((action: actions.getExportList) => action.payload),
    switchMap(state => {
      return this.apiCli.getExportList(state).pipe(
        switchMap(user => [new actions.getExportListSuccess(user)]),
        catchError(error => of(new actions.getExportListFail(error)))
      );
    })
  ));

  //  getExportList

  
  getModulesList$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.GET_MODULES_LIST),
    map((action: actions.getModulesList) => action.payload),
    switchMap(state => {
      return this.apiCli.getModulesList(state).pipe(
        switchMap(user => [new actions.getModulesListSuccess(user)]),
        catchError(error => of(new actions.getModulesListFail(error)))
      );
    })
  ));

  // getExportListCount

  
  getExportListCount$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.GET_EXPORT_LIST_COUNT),
    map((action: actions.getExportListCount) => action.payload),
    switchMap(state => {
      return this.apiCli.getExportListCount(state).pipe(
        map(count => new actions.getExportListCountSuccess(count)),
        catchError(error => of(new actions.getExportListCountFail(error)))
      );
    })
  ));

  
  getProductId$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.GET_PRODUCT_ID),
    map((action: actions.getProductId) => action.payload),
    switchMap(state => {
      return this.apiCli.getProductId(state).pipe(
        map(count => new actions.getProductIdSuccess(count)),
        catchError(error => of(new actions.getProductIdFail(error)))
      );
    })
  ));

  // downloadExcel
  
  downloadExcel$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.DOWNLOAD_EXCEL),
    map((action: actions.downloadExcel) => action.payload),
    switchMap(state => {
      return this.apiCli.downloadExcel(state).pipe(
        tap((data: any) => {
          const filename = 'customer_' + Date.now();
          const blob = new Blob([data], { type: data.type });
          saveAs(blob, filename);
        }),
        map(profile => new actions.downloadExcelSuccess(profile)),
        catchError(error => of(new actions.downloadExcelFail(error)))
      );
    })
  ));
 
  
  getFromModule$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.GET_FROM_MODULE),
    map((action: actions.getFromModule) => action.payload),
    switchMap(state => {
      return this.apiCli.getFromModule(state).pipe(
        tap((data: any) => {
          const filename = 'Excel_' + Date.now() + '.xlsx';
          const blob = new Blob([data], { type: 'text/xlsx' });
          saveAs(blob, filename);
          // this.route.navigate(['/product-configuration/export/export-data']);
          // if(!data.orderId){
          //   this.route.navigate(['/catalog/import/export-data']);
          // }
        
        }),
        switchMap(user => [new actions.getFromModuleSuccess(user)]),
        catchError(error => of(new actions.getFromModuleFail(error)))
      );
    })
  ));
}

