import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExportDataComponent } from './export-data/export-data.component';
import { FromModuleComponent } from './from-module/from-module.component';
import { AuthGuard } from '../../../../../../../src/app/core/providers/guards/auth-guard';
import { LayoutComponent } from '../../new-catalog/layout/layout.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch:'full' ,},

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'export-data', component: ExportDataComponent,
        canActivate: [AuthGuard],
        data: {
          urls: [{ title: 'breadcrumbs.Marketplace', url: '' },
          { title: 'Product Configuration', url: '' },
          { title: 'common.DataExport', url: '' }]
        }
      },
      {
        path: 'from-module', component: FromModuleComponent,
        canActivate: [AuthGuard],
        data: {
          urls: [{ title: 'breadcrumbs.Marketplace', url: '' },
          { title: 'Product Configuration', url: '' },
          { title: 'common.DataExport', url: '' }]
        }
      }
        ]
      },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportRoutingModule { }
