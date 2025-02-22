/*
 * spurtcommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2024 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Api } from '../providers/api/api';

@Injectable()
export class SettingsService extends Api {
  private base: string;

  /*** create coupon api ***/

  public createCoupon(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.post(this.base + '/vendor-coupon/add-coupon', params);
  }

  /*** get product list api ***/

  public productList(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + '/vendor-product', {params: params});
  }

  /*** get category list api ***/

  public categoryList(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + '/vendor/category-list', {params: params});
  }

   /*** get coupon list api ***/

   public couponList(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + '/vendor-coupon/vendor-coupon-list', {params: params});
  }

  /*** get coupon list api ***/

   public couponListCount(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + '/vendor-coupon/vendor-coupon-list', {params: params});
  }

  /*** get coupon usage list api ***/

  public couponUsageList(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + '/vendor-coupon/coupon-usage-list', {params: params});
  }
  /*** delete coupon api ***/

  public deleteCoupon(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.delete(this.base + '/vendor-coupon/delete-vendor-coupon/' + params.vendorCouponId);
  }

  /*** get coupon details api ***/

  public couponDetails(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + '/vendor-coupon/vendor-coupon-detail', {params: params});
  }

  /*** update coupon api ***/

  public updateCoupon(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.put(this.base + '/vendor-coupon/update-vendor-coupon/' + params.vendorCouponId, params);
  }

  /*** BulkUpdate Status***/
  public couponUpdateStatus = new BehaviorSubject<string>('')
  couponUpdateStatus$ = this.couponUpdateStatus.asObservable();

  public updateStatus(params:any){
    this.base = this.getBaseUrl();
    this.http.put(this.base + '/vendor-coupon/status-update/' , {params: params}).subscribe((res:any)=>{
       this.couponUpdateStatus.next(res)
    });
  }
}
