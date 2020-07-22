import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Category } from './category.entity';
import { Order_Detail } from './order_detail.entity';
import { Supplier } from './supplier.entity';
//#endregion

export interface Product {
  //#region ODataApi Properties
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
  Order_Details?: Order_Detail[];
  Supplier?: Supplier;
  //#endregion
}