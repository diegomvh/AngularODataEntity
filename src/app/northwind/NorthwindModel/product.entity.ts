import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Category } from './category.entity';
import { OrderDetail } from './order_detail.entity';
import { Supplier } from './supplier.entity';
import { CategoryModel } from './category.model';
import { OrderDetailModel } from './order_detail.model';
import { SupplierModel } from './supplier.model';
import { CategoryCollection } from './category.collection';
import { OrderDetailCollection } from './order_detail.collection';
import { SupplierCollection } from './supplier.collection';
//#endregion

export interface Product {
  //#region ODataApi Properties
  productID: number;
  productName: string;
  supplierID?: number;
  categoryID?: number;
  quantityPerUnit?: string;
  unitPrice?: number;
  unitsInStock?: number;
  unitsOnOrder?: number;
  reorderLevel?: number;
  discontinued: boolean;
  category?: Category;
  orderDetails?: Order_Detail[];
  supplier?: Supplier;
  //#endregion
}