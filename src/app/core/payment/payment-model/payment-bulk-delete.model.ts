/*
 * SpurtCommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2024 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class PaymentBulkDeleteModel {
  public paymentId: number;

  constructor(paymentdeleteForm: any) {
    this.paymentId = paymentdeleteForm.paymentId || '';
  }
}
