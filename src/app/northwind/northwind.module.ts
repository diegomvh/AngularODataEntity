import { NgModule } from '@angular/core';

//#region ODataApi Imports
import { NorthwindEntitiesService } from './ODataWebExperimental/Northwind/Model/northwindentities.service';
import { CategoriesService } from './ODataWebExperimental/Northwind/Model/categories.service';
import { CustomerDemographicsService } from './ODataWebExperimental/Northwind/Model/customerdemographics.service';
import { CustomersService } from './ODataWebExperimental/Northwind/Model/customers.service';
import { EmployeesService } from './ODataWebExperimental/Northwind/Model/employees.service';
import { OrderDetailsService } from './ODataWebExperimental/Northwind/Model/order_details.service';
import { OrdersService } from './ODataWebExperimental/Northwind/Model/orders.service';
import { ProductsService } from './ODataWebExperimental/Northwind/Model/products.service';
import { RegionsService } from './ODataWebExperimental/Northwind/Model/regions.service';
import { ShippersService } from './ODataWebExperimental/Northwind/Model/shippers.service';
import { SuppliersService } from './ODataWebExperimental/Northwind/Model/suppliers.service';
import { TerritoriesService } from './ODataWebExperimental/Northwind/Model/territories.service';
import { AlphabeticalListOfProductsService } from './ODataWebExperimental/Northwind/Model/alphabetical_list_of_products.service';
import { CategorySalesFor1997Service } from './ODataWebExperimental/Northwind/Model/category_sales_for_1997.service';
import { CurrentProductListsService } from './ODataWebExperimental/Northwind/Model/current_product_lists.service';
import { CustomerAndSuppliersByCitiesService } from './ODataWebExperimental/Northwind/Model/customer_and_suppliers_by_cities.service';
import { InvoicesService } from './ODataWebExperimental/Northwind/Model/invoices.service';
import { OrderDetailsExtendedsService } from './ODataWebExperimental/Northwind/Model/order_details_extendeds.service';
import { OrderSubtotalsService } from './ODataWebExperimental/Northwind/Model/order_subtotals.service';
import { OrdersQriesService } from './ODataWebExperimental/Northwind/Model/orders_qries.service';
import { ProductSalesFor1997Service } from './ODataWebExperimental/Northwind/Model/product_sales_for_1997.service';
import { ProductsAboveAveragePricesService } from './ODataWebExperimental/Northwind/Model/products_above_average_prices.service';
import { ProductsByCategoriesService } from './ODataWebExperimental/Northwind/Model/products_by_categories.service';
import { SalesByCategoriesService } from './ODataWebExperimental/Northwind/Model/sales_by_categories.service';
import { SalesTotalsByAmountsService } from './ODataWebExperimental/Northwind/Model/sales_totals_by_amounts.service';
import { SummaryOfSalesByQuartersService } from './ODataWebExperimental/Northwind/Model/summary_of_sales_by_quarters.service';
import { SummaryOfSalesByYearsService } from './ODataWebExperimental/Northwind/Model/summary_of_sales_by_years.service';
//#endregion

@NgModule({
  providers: [
//#region ODataApi Providers
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