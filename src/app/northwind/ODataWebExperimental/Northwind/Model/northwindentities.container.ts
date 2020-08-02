import { Container } from 'angular-odata';

//#region ODataApi Imports
import { CategoriesServiceConfig } from './categories.service.config';
import { CustomerDemographicsServiceConfig } from './customerdemographics.service.config';
import { CustomersServiceConfig } from './customers.service.config';
import { EmployeesServiceConfig } from './employees.service.config';
import { OrderDetailsServiceConfig } from './order_details.service.config';
import { OrdersServiceConfig } from './orders.service.config';
import { ProductsServiceConfig } from './products.service.config';
import { RegionsServiceConfig } from './regions.service.config';
import { ShippersServiceConfig } from './shippers.service.config';
import { SuppliersServiceConfig } from './suppliers.service.config';
import { TerritoriesServiceConfig } from './territories.service.config';
import { AlphabeticalListOfProductsServiceConfig } from './alphabetical_list_of_products.service.config';
import { CategorySalesFor1997ServiceConfig } from './category_sales_for_1997.service.config';
import { CurrentProductListsServiceConfig } from './current_product_lists.service.config';
import { CustomerAndSuppliersByCitiesServiceConfig } from './customer_and_suppliers_by_cities.service.config';
import { InvoicesServiceConfig } from './invoices.service.config';
import { OrderDetailsExtendedsServiceConfig } from './order_details_extendeds.service.config';
import { OrderSubtotalsServiceConfig } from './order_subtotals.service.config';
import { OrdersQriesServiceConfig } from './orders_qries.service.config';
import { ProductSalesFor1997ServiceConfig } from './product_sales_for_1997.service.config';
import { ProductsAboveAveragePricesServiceConfig } from './products_above_average_prices.service.config';
import { ProductsByCategoriesServiceConfig } from './products_by_categories.service.config';
import { SalesByCategoriesServiceConfig } from './sales_by_categories.service.config';
import { SalesTotalsByAmountsServiceConfig } from './sales_totals_by_amounts.service.config';
import { SummaryOfSalesByQuartersServiceConfig } from './summary_of_sales_by_quarters.service.config';
import { SummaryOfSalesByYearsServiceConfig } from './summary_of_sales_by_years.service.config';
//#endregion

export const NorthwindEntitiesContainer = {
  name: "NorthwindEntitiesContainer",
  annotations: [],
  services: [
    CategoriesServiceConfig,
    CustomerDemographicsServiceConfig,
    CustomersServiceConfig,
    EmployeesServiceConfig,
    OrderDetailsServiceConfig,
    OrdersServiceConfig,
    ProductsServiceConfig,
    RegionsServiceConfig,
    ShippersServiceConfig,
    SuppliersServiceConfig,
    TerritoriesServiceConfig,
    AlphabeticalListOfProductsServiceConfig,
    CategorySalesFor1997ServiceConfig,
    CurrentProductListsServiceConfig,
    CustomerAndSuppliersByCitiesServiceConfig,
    InvoicesServiceConfig,
    OrderDetailsExtendedsServiceConfig,
    OrderSubtotalsServiceConfig,
    OrdersQriesServiceConfig,
    ProductSalesFor1997ServiceConfig,
    ProductsAboveAveragePricesServiceConfig,
    ProductsByCategoriesServiceConfig,
    SalesByCategoriesServiceConfig,
    SalesTotalsByAmountsServiceConfig,
    SummaryOfSalesByQuartersServiceConfig,
    SummaryOfSalesByYearsServiceConfig
  ]
} as Container;