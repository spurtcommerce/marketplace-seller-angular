import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ProductConfigurationRoutingModule } from './product-configuration-routing.module';
import { VarientComponent } from './varient/varient.component';
import { ConfigService } from '../../../../../../src/app/core/services/config.service';
import { SettingsSandbox } from '../../../../../../src/app/core/settings/settings.sandbox';
import { SettingsService } from '../../../../../../src/app/core/settings/settings.service';
import { EffectsModule } from '@ngrx/effects';
import { SettingsEffect } from '../../../../../../src/app/core/settings/effects/settings.effect';
import { ImportSandbox } from '../../../../../../src/app/core/product-configuration/import/import.sandbox';
import { ImportService } from '../../../../../../src/app/core/product-configuration/import/import.service';
import { ImportEffects } from '../../../../../../src/app/core/product-configuration/import/effects/import.effect';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../../../src/app/material.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NumberAcceptModule } from '../../../../../../src/app/default/shared/validation-directives/onlyNumber.module';
import { SharedModule } from '../../../../../../src/app/default/shared/shared.module';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { productVariantComponents } from '../../../../../../add-ons/add-ons.constant';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@NgModule({
  declarations: [
    // ...productVariantComponents,
    // VarientComponent,

  ],
  imports: [
    // CatalogModule,
    CommonModule,
    ProductConfigurationRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    EffectsModule.forFeature([
      // ProductEffect, 
      SettingsEffect, ImportEffects]),
    MaterialModule,
    NgSelectModule,
    NumberAcceptModule,
    NgbModule,
    SharedModule
  ],
  providers: [
    // ProductEffect,
    // ProductService,
    // ProductSandbox,
    DatePipe,
    // CustomCurrencyPipe,
    ConfigService,
    SettingsSandbox,
    SettingsService,
    ImportSandbox,
    ImportService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ],
})
export class ProductConfigurationModule { }
