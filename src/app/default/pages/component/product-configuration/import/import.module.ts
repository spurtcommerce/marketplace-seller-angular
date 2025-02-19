/*
* spurtcommerce
* http://www.spurtcommerce.com
*
* Copyright (c) 2024  Spurt Commerce E-solutions Private Limited
* Author Spurt Commerce E-solutions Private Limited <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImportRoutingModule } from './import-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// state management
import { ImportEffects } from '../../../../../../../src/app/core/product-configuration/import/effects/import.effect';
import { ImportSandbox } from '../../../../../../../src/app/core/product-configuration/import/import.sandbox';
import { ImportService } from '../../../../../../../src/app/core/product-configuration/import/import.service';

// Shared Module
import { SharedModule } from '../../../../../../../src/app/default/shared/shared.module';
import { MaterialModule } from '../../../../../../../src/app/material.module';

// Translate Module
import { NumberAcceptModule } from '../../../../../../../src/app/default/shared/validation-directives/onlyNumber.module';
import { TranslateModule } from '@ngx-translate/core';
import { DataImportComponent } from './data-import/data-import.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

import { ValidationModalComponent } from './validation-modal/validation-modal.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductImportComponent } from './product-import/product-import.component';
import { Title } from '@angular/platform-browser';


@NgModule({
    declarations: [
        DataImportComponent,
        UploadFileComponent,
        ValidationModalComponent,
        ProductImportComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        NgSelectModule,
        NgbModule,
        TranslateModule,
        NumberAcceptModule,
        ImportRoutingModule,
        EffectsModule.forFeature([ImportEffects])
    ],
    providers: [
        ImportService,
        ImportSandbox,
    ],
    bootstrap: []
})
export class ImportModule {
    title = 'Bulk Imports';
    constructor( public titleService: Title){
      this.titleService.setTitle(this.title);
    }
}
