/*
 * spurtcommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2024 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as store from '../../app.state.interface';
import { catchError } from 'rxjs/operators';
import * as actions from '../action/settings.action';
import { SettingsService } from '../settings.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class SettingsEffect {
  constructor(
    private actions$: Actions,
    @Inject(PLATFORM_ID) private platformId: Object,
    private settingsApi: SettingsService,
    public translate:TranslateService, 
    public toastr: ToastrService
  ) { }

  
  createCoupon$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.ActionTypes.CREATE_COUPON),
    map((action: actions.CreateCouponAction) => action.payload),
    switchMap(state => {
      return this.settingsApi.createCoupon(state).pipe(
        tap(res => {
          if (res && res.status === 1) {
            this.toastr.success(res.message);
          }

        }),
        map(value => new actions.CreateCouponSuccess(value)),
        catchError(error => of(new actions.CreateCouponFail(error)))
      );
    })
  ));

  
  productList$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.ActionTypes.PRODUCT_LIST),
    map((action: actions.ProductListAction) => action.payload),
    switchMap(state => {
      return this.settingsApi.productList(state).pipe(
        map(value => new actions.ProductListSuccess(value)),
        catchError(error => of(new actions.ProductListFail(error)))
      );
    })
  ));

  
  categoryList$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.ActionTypes.CATEGORY_LIST),
    map((action: actions.CategoryListAction) => action.payload),
    switchMap(state => {
      return this.settingsApi.categoryList(state).pipe(
        map(value => new actions.CategoryListSuccess(value)),
        catchError(error => of(new actions.CategoryListFail(error)))
      );
    })
  ));

  
  couponList$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.ActionTypes.COUPON_LIST),
    map((action: actions.CouponListAction) => action.payload),
    switchMap(state => {
      return this.settingsApi.couponList(state).pipe(
        map(value => new actions.CouponListSuccess(value)),
        catchError(error => of(new actions.CouponListFail(error)))
      );
    })
  ));
  
  couponUsageList$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.ActionTypes.COUPON_USAGE_LIST),
    map((action: actions.CouponUsageListAction) => action.payload),
    switchMap(state => {
      return this.settingsApi.couponUsageList(state).pipe(
        map(value => new actions.CouponUsageListSuccess(value)),
        catchError(error => of(new actions.CouponUsageListFail(error)))
      );
    })
  ));
  
  couponListCount$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.ActionTypes.COUPON_LIST_COUNT),
    map((action: actions.CouponListCountAction) => action.payload),
    switchMap(state => {
      return this.settingsApi.couponListCount(state).pipe(
        map(value => new actions.CouponListCountSuccess(value)),
        catchError(error => of(new actions.CouponListCountFail(error)))
      );
    })
  ));

  
  couponDelete$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.ActionTypes.DELETE_COUPON),
    map((action: actions.DeleteCouponAction) => action.payload),
    switchMap(state => {
      return this.settingsApi.deleteCoupon(state).pipe(
        map(value => new actions.DeleteCouponSuccess(value)),
        catchError(error => of(new actions.DeleteCouponFail(error)))
      );
    })
  ));

  
  couponDetails$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.ActionTypes.GET_COUPON_DETAILS),
    map((action: actions.GetCouponDetailsAction) => action.payload),
    switchMap(state => {
      return this.settingsApi.couponDetails(state).pipe(
        map(value => new actions.GetCouponDetailsSuccess(value)),
        catchError(error => of(new actions.GetCouponDetailsFail(error)))
      );
    })
  ));


  
  couponUpdate$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.ActionTypes.UPDATE_COUPON),
    map((action: actions.UpdateCouponAction) => action.payload),
    switchMap(state => {
      return this.settingsApi.updateCoupon(state).pipe(
        map(value => new actions.UpdateCouponSuccess(value)),
        catchError(error => of(new actions.UpdateCouponFail(error)))
      );
    })
  ));

}
