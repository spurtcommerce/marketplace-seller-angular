import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SupplierRoutingModule } from './supplier-routing.module';

import { suppliersManagementSandbox } from '../../../../../../../src/app/core/suppliers-management/suppliersManagement.sandbox';
import { suppliersManagementService } from '../../../../../../../src/app/core/suppliers-management/suppliersManagement.service';
import { SharedModule } from '../../../../../../../src/app/default/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { EffectsModule } from '@ngrx/effects';
import { NgSelectModule } from '@ng-select/ng-select';
import { suppliersManagementEffect } from '../../../../../../../src/app/core/suppliers-management/effects/suppliersManagement.effect';

import { suppliersContactSandbox } from '../../../../../../../src/app/core/suppliers-contact/suppliersContact.sandbox';
import { suppliersContactService } from '../../../../../../../src/app/core/suppliers-contact/suppliersContact.service';
import { suppliersContactEffect } from '../../../../../../../src/app/core/suppliers-contact/effects/suppliersContact.effect';
import { CatalogModule } from '../../catalog/catalog.module';
import { SupplierComponents } from '../../../../../../../add-ons/add-ons.constant';


@NgModule({
  declarations: [
    ...SupplierComponents,
    // ListComponent,
    // AddComponent,
    // DocumentComponent,
    // LinkComponent,
    // SupplierContactComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([suppliersManagementEffect,suppliersContactEffect]),
    NgSelectModule,
    TranslateModule,
    NgbAccordionModule,
    NgbModule,
    CatalogModule
  ],
  providers:[
    suppliersManagementSandbox,suppliersManagementService,suppliersContactSandbox,suppliersContactService
  ]
})
export class SupplierModule { }
