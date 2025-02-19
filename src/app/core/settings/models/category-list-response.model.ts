/*
 * spurtcommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2024 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class CategoryListResponseModel {

  public categoryId: number;
  public categoryName: string;
  public vendorCategoryCommission: number;
  public vendorCategoryId: number;
  public vendorId: number;

  constructor(categoryResponse: any) {
    this.categoryId = categoryResponse.categoryId || '';
    this.categoryName = categoryResponse.categoryName || '';
    this.vendorCategoryCommission = categoryResponse.vendorCategoryCommission || '';
    this.vendorCategoryId = categoryResponse.vendorCategoryId || '';
    this.vendorId = categoryResponse.vendorId || '';

  }
}
