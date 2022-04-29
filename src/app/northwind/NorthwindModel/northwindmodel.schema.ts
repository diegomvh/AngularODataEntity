//#region ODataApiGen ODataImports
import {
  SchemaConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CategoryEntityConfig } from './category.entity.config';
import { CustomerDemographicEntityConfig } from './customerdemographic.entity.config';
import { CustomerEntityConfig } from './customer.entity.config';
import { EmployeeEntityConfig } from './employee.entity.config';
import { OrderDetailEntityConfig } from './order_detail.entity.config';
import { OrderEntityConfig } from './order.entity.config';
import { ProductEntityConfig } from './product.entity.config';
import { RegionEntityConfig } from './region.entity.config';
import { ShipperEntityConfig } from './shipper.entity.config';
import { SupplierEntityConfig } from './supplier.entity.config';
import { TerritoryEntityConfig } from './territory.entity.config';
import { AlphabeticalListOfProductEntityConfig } from './alphabetical_list_of_product.entity.config';
import { CategorySalesFor1997EntityConfig } from './category_sales_for_1997.entity.config';
import { CurrentProductListEntityConfig } from './current_product_list.entity.config';
import { CustomerAndSuppliersByCityEntityConfig } from './customer_and_suppliers_by_city.entity.config';
import { InvoiceEntityConfig } from './invoice.entity.config';
import { OrderDetailsExtendedEntityConfig } from './order_details_extended.entity.config';
import { OrderSubtotalEntityConfig } from './order_subtotal.entity.config';
import { OrdersQryEntityConfig } from './orders_qry.entity.config';
import { ProductSalesFor1997EntityConfig } from './product_sales_for_1997.entity.config';
import { ProductsAboveAveragePriceEntityConfig } from './products_above_average_price.entity.config';
import { ProductsByCategoryEntityConfig } from './products_by_category.entity.config';
import { SalesByCategoryEntityConfig } from './sales_by_category.entity.config';
import { SalesTotalsByAmountEntityConfig } from './sales_totals_by_amount.entity.config';
import { SummaryOfSalesByQuarterEntityConfig } from './summary_of_sales_by_quarter.entity.config';
import { SummaryOfSalesByYearEntityConfig } from './summary_of_sales_by_year.entity.config';
//#endregion

//#region ODataApiGen SchemaConfig
export const NorthwindModelSchema = {
  namespace: 'NorthwindModel',
  enums: [],
  entities: [CategoryEntityConfig,
    CustomerDemographicEntityConfig,
    CustomerEntityConfig,
    EmployeeEntityConfig,
    OrderDetailEntityConfig,
    OrderEntityConfig,
    ProductEntityConfig,
    RegionEntityConfig,
    ShipperEntityConfig,
    SupplierEntityConfig,
    TerritoryEntityConfig,
    AlphabeticalListOfProductEntityConfig,
    CategorySalesFor1997EntityConfig,
    CurrentProductListEntityConfig,
    CustomerAndSuppliersByCityEntityConfig,
    InvoiceEntityConfig,
    OrderDetailsExtendedEntityConfig,
    OrderSubtotalEntityConfig,
    OrdersQryEntityConfig,
    ProductSalesFor1997EntityConfig,
    ProductsAboveAveragePriceEntityConfig,
    ProductsByCategoryEntityConfig,
    SalesByCategoryEntityConfig,
    SalesTotalsByAmountEntityConfig,
    SummaryOfSalesByQuarterEntityConfig,
    SummaryOfSalesByYearEntityConfig],
  callables: [],
  containers: []
} as SchemaConfig;
//#endregion