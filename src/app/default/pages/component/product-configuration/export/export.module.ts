import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportRoutingModule } from './export-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../../../../../../src/app/material.module';
import { NumberAcceptModule } from '../../../../../../../src/app/default/shared/validation-directives/onlyNumber.module';
import { FromModuleComponent } from './from-module/from-module.component';
import { ExportDataComponent } from './export-data/export-data.component';
import { ExportFilterComponent } from './filter/filter.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../../../../src/app/default/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExportSandbox } from '../../../../../core/product-configuration/export/export.sandbox';
import { ExportService } from '../../../../../core/product-configuration/export/export.service';
import { EffectsModule } from '@ngrx/effects';
import { ExportEffects } from '../../../../../core/product-configuration/export/export.effects/export.effects';
import { Title } from '@angular/platform-browser';


@NgModule({
  declarations: [
    FromModuleComponent,
    ExportDataComponent,
    ExportFilterComponent
  ],
  imports: [
    CommonModule,
    ExportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateModule,
    NumberAcceptModule,
    NgSelectModule,
    SharedModule,
    NgbModule,
    EffectsModule.forFeature([ ExportEffects]),

    
  ],
  providers:[ExportSandbox, ExportService]
})
export class ExportModule { 
  title = 'Data Export';
  constructor(    public titleService: Title){
    this.titleService.setTitle(this.title);
  }
}
