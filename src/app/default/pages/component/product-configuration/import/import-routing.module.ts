/*
* spurtcommerce
* http://www.spurtcommerce.com
*
* Copyright (c) 2024  Spurt Commerce E-solutions Private Limited
* Author Spurt Commerce E-solutions Private Limited <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { DataImportComponent } from './data-import/data-import.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { AuthGuard } from '../../../../../../../src/app/core/providers/guards/auth-guard';
import { ProductImportComponent } from './product-import/product-import.component';
import { LayoutComponent } from '../../new-catalog/layout/layout.component';



const couponRoutes: Routes = [


  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'products-list', pathMatch: 'full'},
      {
        path: 'products-list',
        component: ProductImportComponent,
        canActivate: [AuthGuard],
        data: {
          title: 'Products',
          urls: [{ title: 'Product Configuration', url: '/product-configuration/' }, { title: 'Bulk Product Imports', url: '/product-configuration/import-products/list' }, { title: '' }]
        }
      },
      {
        path: 'data-import', component: DataImportComponent,
        canActivate: [AuthGuard],
        data: {
          urls: [{ title: 'breadcrumbs.Catalog', url: '' },
          { title: 'breadcrumbs.Manage Imports', url: '' },
          { title: 'breadcrumbs.Bulk Import Mapping', url: '' }]
        }
      },
      {
        path: 'upload-file', component: UploadFileComponent,
        canActivate: [AuthGuard],
        data: {
          urls: [{ title: 'breadcrumbs.Catalog', url: '' },
          { title: 'breadcrumbs.Manage Imports', url: '' },
          { title: 'breadcrumbs.Bulk Import Mapping', url: '' },
          { title: 'breadcrumbs.Upload File', url: '' }]
        }
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(couponRoutes)],
  exports: [RouterModule]
})
export class ImportRoutingModule { }
