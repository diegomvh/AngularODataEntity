import { ODataApiConfig, EDM_PARSERS, ODataMetadata, ODataVersion } from 'angular-odata';
import * as json from './metadata.json';
import { CategoryModel } from './NorthwindModel/category.model';
import { CustomerDemographicModel } from './NorthwindModel/customer-demographic.model';
import { CustomerModel } from './NorthwindModel/customer.model';
import { EmployeeModel } from './NorthwindModel/employee.model';
import { OrderDetailModel } from './NorthwindModel/order-detail.model';
import { OrderModel } from './NorthwindModel/order.model';
import { ProductModel } from './NorthwindModel/product.model';
import { RegionModel } from './NorthwindModel/region.model';
import { ShipperModel } from './NorthwindModel/shipper.model';
import { SupplierModel } from './NorthwindModel/supplier.model';
import { TerritoryModel } from './NorthwindModel/territory.model';
import { AlphabeticalListOfProductModel } from './NorthwindModel/alphabetical-list-of-product.model';
import { CategorySalesFor1997Model } from './NorthwindModel/category-sales-for-1997.model';
import { CurrentProductListModel } from './NorthwindModel/current-product-list.model';
import { CustomerAndSuppliersByCityModel } from './NorthwindModel/customer-and-suppliers-by-city.model';
import { InvoiceModel } from './NorthwindModel/invoice.model';
import { OrderDetailsExtendedModel } from './NorthwindModel/order-details-extended.model';
import { OrderSubtotalModel } from './NorthwindModel/order-subtotal.model';
import { OrdersQryModel } from './NorthwindModel/orders-qry.model';
import { ProductSalesFor1997Model } from './NorthwindModel/product-sales-for-1997.model';
import { ProductsAboveAveragePriceModel } from './NorthwindModel/products-above-average-price.model';
import { ProductsByCategoryModel } from './NorthwindModel/products-by-category.model';
import { SalesByCategoryModel } from './NorthwindModel/sales-by-category.model';
import { SalesTotalsByAmountModel } from './NorthwindModel/sales-totals-by-amount.model';
import { SummaryOfSalesByQuarterModel } from './NorthwindModel/summary-of-sales-by-quarter.model';
import { SummaryOfSalesByYearModel } from './NorthwindModel/summary-of-sales-by-year.model';
import { CategoryCollection } from './NorthwindModel/category.collection';
import { CustomerDemographicCollection } from './NorthwindModel/customer-demographic.collection';
import { CustomerCollection } from './NorthwindModel/customer.collection';
import { EmployeeCollection } from './NorthwindModel/employee.collection';
import { OrderDetailCollection } from './NorthwindModel/order-detail.collection';
import { OrderCollection } from './NorthwindModel/order.collection';
import { ProductCollection } from './NorthwindModel/product.collection';
import { RegionCollection } from './NorthwindModel/region.collection';
import { ShipperCollection } from './NorthwindModel/shipper.collection';
import { SupplierCollection } from './NorthwindModel/supplier.collection';
import { TerritoryCollection } from './NorthwindModel/territory.collection';
import { AlphabeticalListOfProductCollection } from './NorthwindModel/alphabetical-list-of-product.collection';
import { CategorySalesFor1997Collection } from './NorthwindModel/category-sales-for-1997.collection';
import { CurrentProductListCollection } from './NorthwindModel/current-product-list.collection';
import { CustomerAndSuppliersByCityCollection } from './NorthwindModel/customer-and-suppliers-by-city.collection';
import { InvoiceCollection } from './NorthwindModel/invoice.collection';
import { OrderDetailsExtendedCollection } from './NorthwindModel/order-details-extended.collection';
import { OrderSubtotalCollection } from './NorthwindModel/order-subtotal.collection';
import { OrdersQryCollection } from './NorthwindModel/orders-qry.collection';
import { ProductSalesFor1997Collection } from './NorthwindModel/product-sales-for-1997.collection';
import { ProductsAboveAveragePriceCollection } from './NorthwindModel/products-above-average-price.collection';
import { ProductsByCategoryCollection } from './NorthwindModel/products-by-category.collection';
import { SalesByCategoryCollection } from './NorthwindModel/sales-by-category.collection';
import { SalesTotalsByAmountCollection } from './NorthwindModel/sales-totals-by-amount.collection';
import { SummaryOfSalesByQuarterCollection } from './NorthwindModel/summary-of-sales-by-quarter.collection';
import { SummaryOfSalesByYearCollection } from './NorthwindModel/summary-of-sales-by-year.collection';

export const NorthwindConfig = ODataMetadata.fromJson(json).toConfig({
  serviceRootUrl: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
  metadataUrl: 'https://services.odata.org/V4/Northwind/Northwind.svc/$metadata',
  name: 'Northwind',
  version: '4.0' as ODataVersion,
  creation: new Date('2025-10-28T15:03:09.941Z'),
  parsers: EDM_PARSERS,
  models: {
    'NorthwindModel.Category': CategoryModel, 
    'NorthwindModel.CustomerDemographic': CustomerDemographicModel, 
    'NorthwindModel.Customer': CustomerModel, 
    'NorthwindModel.Employee': EmployeeModel, 
    'NorthwindModel.Order_Detail': OrderDetailModel, 
    'NorthwindModel.Order': OrderModel, 
    'NorthwindModel.Product': ProductModel, 
    'NorthwindModel.Region': RegionModel, 
    'NorthwindModel.Shipper': ShipperModel, 
    'NorthwindModel.Supplier': SupplierModel, 
    'NorthwindModel.Territory': TerritoryModel, 
    'NorthwindModel.Alphabetical_list_of_product': AlphabeticalListOfProductModel, 
    'NorthwindModel.Category_Sales_for_1997': CategorySalesFor1997Model, 
    'NorthwindModel.Current_Product_List': CurrentProductListModel, 
    'NorthwindModel.Customer_and_Suppliers_by_City': CustomerAndSuppliersByCityModel, 
    'NorthwindModel.Invoice': InvoiceModel, 
    'NorthwindModel.Order_Details_Extended': OrderDetailsExtendedModel, 
    'NorthwindModel.Order_Subtotal': OrderSubtotalModel, 
    'NorthwindModel.Orders_Qry': OrdersQryModel, 
    'NorthwindModel.Product_Sales_for_1997': ProductSalesFor1997Model, 
    'NorthwindModel.Products_Above_Average_Price': ProductsAboveAveragePriceModel, 
    'NorthwindModel.Products_by_Category': ProductsByCategoryModel, 
    'NorthwindModel.Sales_by_Category': SalesByCategoryModel, 
    'NorthwindModel.Sales_Totals_by_Amount': SalesTotalsByAmountModel, 
    'NorthwindModel.Summary_of_Sales_by_Quarter': SummaryOfSalesByQuarterModel, 
    'NorthwindModel.Summary_of_Sales_by_Year': SummaryOfSalesByYearModel, 
  },
  collections: {
    'NorthwindModel.Category': CategoryCollection, 
    'NorthwindModel.CustomerDemographic': CustomerDemographicCollection, 
    'NorthwindModel.Customer': CustomerCollection, 
    'NorthwindModel.Employee': EmployeeCollection, 
    'NorthwindModel.Order_Detail': OrderDetailCollection, 
    'NorthwindModel.Order': OrderCollection, 
    'NorthwindModel.Product': ProductCollection, 
    'NorthwindModel.Region': RegionCollection, 
    'NorthwindModel.Shipper': ShipperCollection, 
    'NorthwindModel.Supplier': SupplierCollection, 
    'NorthwindModel.Territory': TerritoryCollection, 
    'NorthwindModel.Alphabetical_list_of_product': AlphabeticalListOfProductCollection, 
    'NorthwindModel.Category_Sales_for_1997': CategorySalesFor1997Collection, 
    'NorthwindModel.Current_Product_List': CurrentProductListCollection, 
    'NorthwindModel.Customer_and_Suppliers_by_City': CustomerAndSuppliersByCityCollection, 
    'NorthwindModel.Invoice': InvoiceCollection, 
    'NorthwindModel.Order_Details_Extended': OrderDetailsExtendedCollection, 
    'NorthwindModel.Order_Subtotal': OrderSubtotalCollection, 
    'NorthwindModel.Orders_Qry': OrdersQryCollection, 
    'NorthwindModel.Product_Sales_for_1997': ProductSalesFor1997Collection, 
    'NorthwindModel.Products_Above_Average_Price': ProductsAboveAveragePriceCollection, 
    'NorthwindModel.Products_by_Category': ProductsByCategoryCollection, 
    'NorthwindModel.Sales_by_Category': SalesByCategoryCollection, 
    'NorthwindModel.Sales_Totals_by_Amount': SalesTotalsByAmountCollection, 
    'NorthwindModel.Summary_of_Sales_by_Quarter': SummaryOfSalesByQuarterCollection, 
    'NorthwindModel.Summary_of_Sales_by_Year': SummaryOfSalesByYearCollection, 
  }
}) as ODataApiConfig;
