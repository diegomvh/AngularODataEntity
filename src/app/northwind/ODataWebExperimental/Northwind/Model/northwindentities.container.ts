import { EntityContainerConfig } from 'angular-odata';

//#region ODataApi Imports
import { CategoriesConfig } from './categories.service.config';
import { CustomerDemographicsConfig } from './customerdemographics.service.config';
import { CustomersConfig } from './customers.service.config';
import { EmployeesConfig } from './employees.service.config';
import { OrderDetailsConfig } from './order_details.service.config';
import { OrdersConfig } from './orders.service.config';
import { ProductsConfig } from './products.service.config';
import { RegionsConfig } from './regions.service.config';
import { ShippersConfig } from './shippers.service.config';
import { SuppliersConfig } from './suppliers.service.config';
import { TerritoriesConfig } from './territories.service.config';
import { AlphabeticalListOfProductsConfig } from './alphabetical_list_of_products.service.config';
import { CategorySalesFor1997Config } from './category_sales_for_1997.service.config';
import { CurrentProductListsConfig } from './current_product_lists.service.config';
import { CustomerAndSuppliersByCitiesConfig } from './customer_and_suppliers_by_cities.service.config';
import { InvoicesConfig } from './invoices.service.config';
import { OrderDetailsExtendedsConfig } from './order_details_extendeds.service.config';
import { OrderSubtotalsConfig } from './order_subtotals.service.config';
import { OrdersQriesConfig } from './orders_qries.service.config';
import { ProductSalesFor1997Config } from './product_sales_for_1997.service.config';
import { ProductsAboveAveragePricesConfig } from './products_above_average_prices.service.config';
import { ProductsByCategoriesConfig } from './products_by_categories.service.config';
import { SalesByCategoriesConfig } from './sales_by_categories.service.config';
import { SalesTotalsByAmountsConfig } from './sales_totals_by_amounts.service.config';
import { SummaryOfSalesByQuartersConfig } from './summary_of_sales_by_quarters.service.config';
import { SummaryOfSalesByYearsConfig } from './summary_of_sales_by_years.service.config';
//#endregion

//#region ODataApi EntityContainerConfig
export const NorthwindEntitiesContainer = {
  name: "NorthwindEntities",
  annotations: [],
  entitySets: [
    CategoriesConfig,
    CustomerDemographicsConfig,
    CustomersConfig,
    EmployeesConfig,
    OrderDetailsConfig,
    OrdersConfig,
    ProductsConfig,
    RegionsConfig,
    ShippersConfig,
    SuppliersConfig,
    TerritoriesConfig,
    AlphabeticalListOfProductsConfig,
    CategorySalesFor1997Config,
    CurrentProductListsConfig,
    CustomerAndSuppliersByCitiesConfig,
    InvoicesConfig,
    OrderDetailsExtendedsConfig,
    OrderSubtotalsConfig,
    OrdersQriesConfig,
    ProductSalesFor1997Config,
    ProductsAboveAveragePricesConfig,
    ProductsByCategoriesConfig,
    SalesByCategoriesConfig,
    SalesTotalsByAmountsConfig,
    SummaryOfSalesByQuartersConfig,
    SummaryOfSalesByYearsConfig
  ]
} as EntityContainerConfig;
//#endregion