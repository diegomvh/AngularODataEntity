//#region ODataApiGen ODataImports
import {
  NgModule
} from '@angular/core';//#endregion

//#region ODataApiGen Imports
import { NorthwindEntitiesService } from './ODataWebExperimental/Northwind/Model/northwind-entities.service';
import { CategoriesService } from './ODataWebExperimental/Northwind/Model/categories.service';
import { CustomerDemographicsService } from './ODataWebExperimental/Northwind/Model/customer-demographics.service';
import { CustomersService } from './ODataWebExperimental/Northwind/Model/customers.service';
import { EmployeesService } from './ODataWebExperimental/Northwind/Model/employees.service';
import { OrderDetailsService } from './ODataWebExperimental/Northwind/Model/order-details.service';
import { OrdersService } from './ODataWebExperimental/Northwind/Model/orders.service';
import { ProductsService } from './ODataWebExperimental/Northwind/Model/products.service';
import { RegionsService } from './ODataWebExperimental/Northwind/Model/regions.service';
import { ShippersService } from './ODataWebExperimental/Northwind/Model/shippers.service';
import { SuppliersService } from './ODataWebExperimental/Northwind/Model/suppliers.service';
import { TerritoriesService } from './ODataWebExperimental/Northwind/Model/territories.service';
import { AlphabeticalListOfProductsService } from './ODataWebExperimental/Northwind/Model/alphabetical-list-of-products.service';
import { CategorySalesFor1997Service } from './ODataWebExperimental/Northwind/Model/category-sales-for-1997.service';
import { CurrentProductListsService } from './ODataWebExperimental/Northwind/Model/current-product-lists.service';
import { CustomerAndSuppliersByCitiesService } from './ODataWebExperimental/Northwind/Model/customer-and-suppliers-by-cities.service';
import { InvoicesService } from './ODataWebExperimental/Northwind/Model/invoices.service';
import { OrderDetailsExtendedsService } from './ODataWebExperimental/Northwind/Model/order-details-extendeds.service';
import { OrderSubtotalsService } from './ODataWebExperimental/Northwind/Model/order-subtotals.service';
import { OrdersQriesService } from './ODataWebExperimental/Northwind/Model/orders-qries.service';
import { ProductSalesFor1997Service } from './ODataWebExperimental/Northwind/Model/product-sales-for-1997.service';
import { ProductsAboveAveragePricesService } from './ODataWebExperimental/Northwind/Model/products-above-average-prices.service';
import { ProductsByCategoriesService } from './ODataWebExperimental/Northwind/Model/products-by-categories.service';
import { SalesByCategoriesService } from './ODataWebExperimental/Northwind/Model/sales-by-categories.service';
import { SalesTotalsByAmountsService } from './ODataWebExperimental/Northwind/Model/sales-totals-by-amounts.service';
import { SummaryOfSalesByQuartersService } from './ODataWebExperimental/Northwind/Model/summary-of-sales-by-quarters.service';
import { SummaryOfSalesByYearsService } from './ODataWebExperimental/Northwind/Model/summary-of-sales-by-years.service';
//#endregion

@NgModule({
  providers: [
//#region ODataApiGen Providers
    NorthwindEntitiesService,
    CategoriesService,
    CustomerDemographicsService,
    CustomersService,
    EmployeesService,
    OrderDetailsService,
    OrdersService,
    ProductsService,
    RegionsService,
    ShippersService,
    SuppliersService,
    TerritoriesService,
    AlphabeticalListOfProductsService,
    CategorySalesFor1997Service,
    CurrentProductListsService,
    CustomerAndSuppliersByCitiesService,
    InvoicesService,
    OrderDetailsExtendedsService,
    OrderSubtotalsService,
    OrdersQriesService,
    ProductSalesFor1997Service,
    ProductsAboveAveragePricesService,
    ProductsByCategoriesService,
    SalesByCategoriesService,
    SalesTotalsByAmountsService,
    SummaryOfSalesByQuartersService,
    SummaryOfSalesByYearsService//#endregion
  ]
})
export class NorthwindModule { }