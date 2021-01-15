import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { CategoryConfig } from './category.entity.config';
import { CustomerDemographicConfig } from './customerdemographic.entity.config';
import { CustomerConfig } from './customer.entity.config';
import { EmployeeConfig } from './employee.entity.config';
import { OrderDetailConfig } from './order_detail.entity.config';
import { OrderConfig } from './order.entity.config';
import { ProductConfig } from './product.entity.config';
import { RegionConfig } from './region.entity.config';
import { ShipperConfig } from './shipper.entity.config';
import { SupplierConfig } from './supplier.entity.config';
import { TerritoryConfig } from './territory.entity.config';
import { AlphabeticalListOfProductConfig } from './alphabetical_list_of_product.entity.config';
import { CategorySalesFor1997Config } from './category_sales_for_1997.entity.config';
import { CurrentProductListConfig } from './current_product_list.entity.config';
import { CustomerAndSuppliersByCityConfig } from './customer_and_suppliers_by_city.entity.config';
import { InvoiceConfig } from './invoice.entity.config';
import { OrderDetailsExtendedConfig } from './order_details_extended.entity.config';
import { OrderSubtotalConfig } from './order_subtotal.entity.config';
import { OrdersQryConfig } from './orders_qry.entity.config';
import { ProductSalesFor1997Config } from './product_sales_for_1997.entity.config';
import { ProductsAboveAveragePriceConfig } from './products_above_average_price.entity.config';
import { ProductsByCategoryConfig } from './products_by_category.entity.config';
import { SalesByCategoryConfig } from './sales_by_category.entity.config';
import { SalesTotalsByAmountConfig } from './sales_totals_by_amount.entity.config';
import { SummaryOfSalesByQuarterConfig } from './summary_of_sales_by_quarter.entity.config';
import { SummaryOfSalesByYearConfig } from './summary_of_sales_by_year.entity.config';
//#endregion

//#region ODataApi SchemaConfig
export const NorthwindModelSchema = {
  namespace: "NorthwindModel",
  enums: [],
  entities: [CategoryConfig,
    CustomerDemographicConfig,
    CustomerConfig,
    EmployeeConfig,
    OrderDetailConfig,
    OrderConfig,
    ProductConfig,
    RegionConfig,
    ShipperConfig,
    SupplierConfig,
    TerritoryConfig,
    AlphabeticalListOfProductConfig,
    CategorySalesFor1997Config,
    CurrentProductListConfig,
    CustomerAndSuppliersByCityConfig,
    InvoiceConfig,
    OrderDetailsExtendedConfig,
    OrderSubtotalConfig,
    OrdersQryConfig,
    ProductSalesFor1997Config,
    ProductsAboveAveragePriceConfig,
    ProductsByCategoryConfig,
    SalesByCategoryConfig,
    SalesTotalsByAmountConfig,
    SummaryOfSalesByQuarterConfig,
    SummaryOfSalesByYearConfig],
  callables: [],
  containers: []
} as SchemaConfig;
//#endregion