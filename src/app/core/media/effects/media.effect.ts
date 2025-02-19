/*
 * SpurtCommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2024 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import { Injectable } from '@angular/core';
// effects
import { createEffect, Actions, ofType } from '@ngrx/effects';
// store
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
// actions
import * as actions from '../action/media.action';
import { catchError } from 'rxjs/operators';
// service
import { MediaService } from '../media.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class MediaEffects {
  constructor(private action$: Actions, private apiCli: MediaService, public toaster: ToastrService) {}

  // MEDIA UPLOAD
  
  domediaupload$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.DO_MEDIAUPLOAD),
    map((action: actions.DoMediaUploadAction) => action.payload),
    switchMap(state => {
      return this.apiCli.document(state).pipe(
        switchMap(user => [new actions.DoMediaUploadSuccessAction(user)]),
        tap(resp => {
          if (resp) {
            if (resp.payload['status'] === 1) {
              this.toaster.success('Success', 'File uploaded successfully');
            }
          }
        }),
        catchError(error => of(new actions.DoMediaUploadFailAction(error)))
      );
    })
  ));

  // MEDIA CREATE FOLDER

  
  domediafolder$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.DO_MEDIACREATEFOLDER),
    map((action: actions.DoMediaCreatefolderAction) => action.payload),
    switchMap(state => {
      return this.apiCli.CreateFolder(state).pipe(
        switchMap(user => [new actions.DoMediaCreatefolderSuccessAction(user)]),
        catchError(error =>
          of(new actions.DoMediaCreatefolderFailAction(error))
        )
      );
    })
  ));

  
  dobuckdelfile$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.DO_DELETEFILE),
    map((action: actions.DoDeletefileAction) => action.payload),
    switchMap(state => {
      return this.apiCli.deleteImage(state).pipe(
        switchMap(user => [new actions.DoDeletefileSuccessAction(user)]),
        catchError(error => of(new actions.DoDeletefileFailAction(error)))
      );
    })
  ));
  // buck del folder

  
  dobuckdelfolder$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.DO_DELETEFOLDER),
    map((action: actions.DoDeletefolderAction) => action.payload),
    switchMap(state => {
      return this.apiCli.deleteFolder(state).pipe(
        switchMap(user => [new actions.DoDeletefolderSuccessAction(user)]),
        catchError(error => of(new actions.DoDeletefolderFailAction(error)))
      );
    })
  ));

  // BUCKETLIST
  
  dobucklists$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.DO_BUCKETLIST),
    map((action: actions.DoBucketlistAction) => action.payload),
    switchMap(state => {
      return this.apiCli.bucketLists(state).pipe(
        switchMap(user => [new actions.DoBucketlistSuccessAction(user)]),
        catchError(error => of(new actions.DoBucketlistFailAction(error)))
      );
    })
  ));

  // SEARCH FOLDER
  
  dosearchFolder$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.DO_SEARCHFOLDER),
    map((action: actions.DoSearchfolderAction) => action.payload),
    switchMap(state => {
      return this.apiCli.searchFolder(state).pipe(
        switchMap(user => [new actions.DoBucketlistSuccessAction(user)]),
        catchError(error => of(new actions.DoSearchfolderFailAction(error)))
      );
    })
  ));
}
