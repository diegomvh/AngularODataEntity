import { NgModule } from '@angular/core';
import { NorthwindEntitiesService } from './ODataWebV4/Northwind/Model/northwind-entities.service';
import { CategoriesService } from './ODataWebV4/Northwind/Model/categories.service';
import { CustomerDemographicsService } from './ODataWebV4/Northwind/Model/customer-demographics.service';
import { CustomersService } from './ODataWebV4/Northwind/Model/customers.service';
import { EmployeesService } from './ODataWebV4/Northwind/Model/employees.service';
import { OrderDetailsService } from './ODataWebV4/Northwind/Model/order-details.service';
import { OrdersService } from './ODataWebV4/Northwind/Model/orders.service';
import { ProductsService } from './ODataWebV4/Northwind/Model/products.service';
import { RegionsService } from './ODataWebV4/Northwind/Model/regions.service';
import { ShippersService } from './ODataWebV4/Northwind/Model/shippers.service';
import { SuppliersService } from './ODataWebV4/Northwind/Model/suppliers.service';
import { TerritoriesService } from './ODataWebV4/Northwind/Model/territories.service';
import { AlphabeticalListOfProductsService } from './ODataWebV4/Northwind/Model/alphabetical-list-of-products.service';
import { CategorySalesFor1997Service } from './ODataWebV4/Northwind/Model/category-sales-for-1997.service';
import { CurrentProductListsService } from './ODataWebV4/Northwind/Model/current-product-lists.service';
import { CustomerAndSuppliersByCitiesService } from './ODataWebV4/Northwind/Model/customer-and-suppliers-by-cities.service';
import { InvoicesService } from './ODataWebV4/Northwind/Model/invoices.service';
import { OrderDetailsExtendedsService } from './ODataWebV4/Northwind/Model/order-details-extendeds.service';
import { OrderSubtotalsService } from './ODataWebV4/Northwind/Model/order-subtotals.service';
import { OrdersQriesService } from './ODataWebV4/Northwind/Model/orders-qries.service';
import { ProductSalesFor1997Service } from './ODataWebV4/Northwind/Model/product-sales-for-1997.service';
import { ProductsAboveAveragePricesService } from './ODataWebV4/Northwind/Model/products-above-average-prices.service';
import { ProductsByCategoriesService } from './ODataWebV4/Northwind/Model/products-by-categories.service';
import { SalesByCategoriesService } from './ODataWebV4/Northwind/Model/sales-by-categories.service';
import { SalesTotalsByAmountsService } from './ODataWebV4/Northwind/Model/sales-totals-by-amounts.service';
import { SummaryOfSalesByQuartersService } from './ODataWebV4/Northwind/Model/summary-of-sales-by-quarters.service';
import { SummaryOfSalesByYearsService } from './ODataWebV4/Northwind/Model/summary-of-sales-by-years.service';

@NgModule({
  providers: [
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
    SummaryOfSalesByYearsService,
  ]
})
export class NorthwindModule { }
