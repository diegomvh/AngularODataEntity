//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Category } from './category.entity';
import { OrderDetail } from './order-detail.entity';
import { Supplier } from './supplier.entity';
import { CategoryModel } from './category.model';
import { OrderDetailModel } from './order-detail.model';
import { SupplierModel } from './supplier.model';
import { CategoryCollection } from './category.collection';
import { OrderDetailCollection } from './order-detail.collection';
import { SupplierCollection } from './supplier.collection';
//#endregion

//#region ODataApiGen Type
export const ProductType = 'NorthwindModel.Product';//#endregion
export interface Product {
  //#region ODataApiGen Properties
  ProductID: number;
  ProductName: string;
  SupplierID?: number;
  CategoryID?: number;
  QuantityPerUnit?: string;
  UnitPrice?: number;
  UnitsInStock?: number;
  UnitsOnOrder?: number;
  ReorderLevel?: number;
  Discontinued: boolean;
  Category?: Category;
  Order_Details?: OrderDetail[];
  Supplier?: Supplier;
  //#endregion
}