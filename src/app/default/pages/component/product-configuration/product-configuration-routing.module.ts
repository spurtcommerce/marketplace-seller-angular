import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { productVariantRoutes } from '../../../../../../add-ons/add-ons.constant';



const routes: Routes = [
  // {path: '', redirectTo: 'varient', pathMatch: 'full'},
  // {
  //   path: 'varient',
  //   component: LayoutComponent,
  //   children: [
  //     {path: '', redirectTo: 'list', pathMatch: 'full'},
  //     {
  //       path: 'list',
  //       component: VariantProductListComponent,
  //       data: {
  //         title: 'Products',
  //         ActiveStatus:'products-list',
  //         urls: [{ title: 'breadcrumbs.Home', url: '/dashboard' }, { title: 'breadcrumbs.Catalog', url: '/catalog/manage-products/' }, { title: 'breadcrumbs.ManageProducts', url: '/catalog/manage-products/list' }, { title: 'breadcrumbs.ProductList' }]
  //       }
  //     },
  //     {
  //       path: 'add/:id',
  //       component: VariantProductAddComponent,
  //       data: {
  //         title: 'Products',
  //         ActiveStatus: 'products-list',
  //         urls: [{ title: 'breadcrumbs.Home', url: '/dashboard' }, { title: 'breadcrumbs.Catalog', url: '/catalog/manage-products/' }, { title: 'breadcrumbs.ManageProducts', url: '/catalog/manage-products/list' }, { title: 'breadcrumbs.ProductList' }]
  //       },
  //     },
  //   ]
  // },
  
  // {
  //   path: 'import',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: 'list',
  //       component: ProductImportComponent,
  //       data: {
  //         title: 'Products',
  //         ActiveStatus:'products-list',
  //         urls: [ { title: 'Product Configuration', url: '/product-configuration/' }, { title: 'Bulk Product Imports', url: '/product-configuration/import-products/list' }, { title: '' }]
  //       }
  //     },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductConfigurationRoutingModule { 
  title = 'Product Variant';
  constructor(public titleService: Title){
    this.titleService.setTitle(this.title);
  }
}
