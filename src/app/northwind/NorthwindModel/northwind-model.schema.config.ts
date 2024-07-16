//#region ODataApiGen ODataImports
import {
  SchemaConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CategoryEntityConfig } from './category.entity.config';
import { CustomerDemographicEntityConfig } from './customer-demographic.entity.config';
import { CustomerEntityConfig } from './customer.entity.config';
import { EmployeeEntityConfig } from './employee.entity.config';
import { OrderDetailEntityConfig } from './order-detail.entity.config';
import { OrderEntityConfig } from './order.entity.config';
import { ProductEntityConfig } from './product.entity.config';
import { RegionEntityConfig } from './region.entity.config';
import { ShipperEntityConfig } from './shipper.entity.config';
import { SupplierEntityConfig } from './supplier.entity.config';
import { TerritoryEntityConfig } from './territory.entity.config';
import { AlphabeticalListOfProductEntityConfig } from './alphabetical-list-of-product.entity.config';
import { CategorySalesFor1997EntityConfig } from './category-sales-for-1997.entity.config';
import { CurrentProductListEntityConfig } from './current-product-list.entity.config';
import { CustomerAndSuppliersByCityEntityConfig } from './customer-and-suppliers-by-city.entity.config';
import { InvoiceEntityConfig } from './invoice.entity.config';
import { OrderDetailsExtendedEntityConfig } from './order-details-extended.entity.config';
import { OrderSubtotalEntityConfig } from './order-subtotal.entity.config';
import { OrdersQryEntityConfig } from './orders-qry.entity.config';
import { ProductSalesFor1997EntityConfig } from './product-sales-for-1997.entity.config';
import { ProductsAboveAveragePriceEntityConfig } from './products-above-average-price.entity.config';
import { ProductsByCategoryEntityConfig } from './products-by-category.entity.config';
import { SalesByCategoryEntityConfig } from './sales-by-category.entity.config';
import { SalesTotalsByAmountEntityConfig } from './sales-totals-by-amount.entity.config';
import { SummaryOfSalesByQuarterEntityConfig } from './summary-of-sales-by-quarter.entity.config';
import { SummaryOfSalesByYearEntityConfig } from './summary-of-sales-by-year.entity.config';
//#endregion

//#region ODataApiGen SchemaConfig
export const NorthwindModelSchemaConfig = {
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