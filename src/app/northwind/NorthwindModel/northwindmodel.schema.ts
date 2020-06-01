import { Schema } from 'angular-odata';

//#region ODataApi Imports
import { CategoryConfig } from './category.entity.config';
import { CustomerDemographicConfig } from './customerdemographic.entity.config';
import { CustomerConfig } from './customer.entity.config';
import { EmployeeConfig } from './employee.entity.config';
import { Order_DetailConfig } from './order_detail.entity.config';
import { OrderConfig } from './order.entity.config';
import { ProductConfig } from './product.entity.config';
import { RegionConfig } from './region.entity.config';
import { ShipperConfig } from './shipper.entity.config';
import { SupplierConfig } from './supplier.entity.config';
import { TerritoryConfig } from './territory.entity.config';
import { Alphabetical_list_of_productConfig } from './alphabetical_list_of_product.entity.config';
import { Category_Sales_for_1997Config } from './category_sales_for_1997.entity.config';
import { Current_Product_ListConfig } from './current_product_list.entity.config';
import { Customer_and_Suppliers_by_CityConfig } from './customer_and_suppliers_by_city.entity.config';
import { InvoiceConfig } from './invoice.entity.config';
import { Order_Details_ExtendedConfig } from './order_details_extended.entity.config';
import { Order_SubtotalConfig } from './order_subtotal.entity.config';
import { Orders_QryConfig } from './orders_qry.entity.config';
import { Product_Sales_for_1997Config } from './product_sales_for_1997.entity.config';
import { Products_Above_Average_PriceConfig } from './products_above_average_price.entity.config';
import { Products_by_CategoryConfig } from './products_by_category.entity.config';
import { Sales_by_CategoryConfig } from './sales_by_category.entity.config';
import { Sales_Totals_by_AmountConfig } from './sales_totals_by_amount.entity.config';
import { Summary_of_Sales_by_QuarterConfig } from './summary_of_sales_by_quarter.entity.config';
import { Summary_of_Sales_by_YearConfig } from './summary_of_sales_by_year.entity.config';
//#endregion

export const NorthwindModelSchema = {
  namespace: "NorthwindModel",
  enums: [
    
  ],
  entities: [
    CategoryConfig,
    CustomerDemographicConfig,
    CustomerConfig,
    EmployeeConfig,
    Order_DetailConfig,
    OrderConfig,
    ProductConfig,
    RegionConfig,
    ShipperConfig,
    SupplierConfig,
    TerritoryConfig,
    Alphabetical_list_of_productConfig,
    Category_Sales_for_1997Config,
    Current_Product_ListConfig,
    Customer_and_Suppliers_by_CityConfig,
    InvoiceConfig,
    Order_Details_ExtendedConfig,
    Order_SubtotalConfig,
    Orders_QryConfig,
    Product_Sales_for_1997Config,
    Products_Above_Average_PriceConfig,
    Products_by_CategoryConfig,
    Sales_by_CategoryConfig,
    Sales_Totals_by_AmountConfig,
    Summary_of_Sales_by_QuarterConfig,
    Summary_of_Sales_by_YearConfig
  ],
  containers: [
    
  ]
} as Schema;