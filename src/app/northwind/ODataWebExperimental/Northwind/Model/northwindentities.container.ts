import { Container } from 'angular-odata';

//#region ODataApi Imports
import { CategoriesServiceConfig } from './categories.service.config';
import { CustomerDemographicsServiceConfig } from './customerdemographics.service.config';
import { CustomersServiceConfig } from './customers.service.config';
import { EmployeesServiceConfig } from './employees.service.config';
import { Order_DetailsServiceConfig } from './order_details.service.config';
import { OrdersServiceConfig } from './orders.service.config';
import { ProductsServiceConfig } from './products.service.config';
import { RegionsServiceConfig } from './regions.service.config';
import { ShippersServiceConfig } from './shippers.service.config';
import { SuppliersServiceConfig } from './suppliers.service.config';
import { TerritoriesServiceConfig } from './territories.service.config';
import { Alphabetical_list_of_productsServiceConfig } from './alphabetical_list_of_products.service.config';
import { Category_Sales_for_1997ServiceConfig } from './category_sales_for_1997.service.config';
import { Current_Product_ListsServiceConfig } from './current_product_lists.service.config';
import { Customer_and_Suppliers_by_CitiesServiceConfig } from './customer_and_suppliers_by_cities.service.config';
import { InvoicesServiceConfig } from './invoices.service.config';
import { Order_Details_ExtendedsServiceConfig } from './order_details_extendeds.service.config';
import { Order_SubtotalsServiceConfig } from './order_subtotals.service.config';
import { Orders_QriesServiceConfig } from './orders_qries.service.config';
import { Product_Sales_for_1997ServiceConfig } from './product_sales_for_1997.service.config';
import { Products_Above_Average_PricesServiceConfig } from './products_above_average_prices.service.config';
import { Products_by_CategoriesServiceConfig } from './products_by_categories.service.config';
import { Sales_by_CategoriesServiceConfig } from './sales_by_categories.service.config';
import { Sales_Totals_by_AmountsServiceConfig } from './sales_totals_by_amounts.service.config';
import { Summary_of_Sales_by_QuartersServiceConfig } from './summary_of_sales_by_quarters.service.config';
import { Summary_of_Sales_by_YearsServiceConfig } from './summary_of_sales_by_years.service.config';
//#endregion

export const NorthwindEntitiesContainer = {
  name: "NorthwindEntitiesContainer",
  services: [
    CategoriesServiceConfig,
    CustomerDemographicsServiceConfig,
    CustomersServiceConfig,
    EmployeesServiceConfig,
    Order_DetailsServiceConfig,
    OrdersServiceConfig,
    ProductsServiceConfig,
    RegionsServiceConfig,
    ShippersServiceConfig,
    SuppliersServiceConfig,
    TerritoriesServiceConfig,
    Alphabetical_list_of_productsServiceConfig,
    Category_Sales_for_1997ServiceConfig,
    Current_Product_ListsServiceConfig,
    Customer_and_Suppliers_by_CitiesServiceConfig,
    InvoicesServiceConfig,
    Order_Details_ExtendedsServiceConfig,
    Order_SubtotalsServiceConfig,
    Orders_QriesServiceConfig,
    Product_Sales_for_1997ServiceConfig,
    Products_Above_Average_PricesServiceConfig,
    Products_by_CategoriesServiceConfig,
    Sales_by_CategoriesServiceConfig,
    Sales_Totals_by_AmountsServiceConfig,
    Summary_of_Sales_by_QuartersServiceConfig,
    Summary_of_Sales_by_YearsServiceConfig
  ]
} as Container;