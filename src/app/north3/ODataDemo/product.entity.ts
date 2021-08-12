//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { ProductDetail } from './productdetail.entity';
import { Category } from './category.entity';
import { Supplier } from './supplier.entity';
import { ProductDetailModel } from './productdetail.model';
import { CategoryModel } from './category.model';
import { SupplierModel } from './supplier.model';
import { ProductDetailCollection } from './productdetail.collection';
import { CategoryCollection } from './category.collection';
import { SupplierCollection } from './supplier.collection';
//#endregion

export interface Product {
  //#region ODataApi Properties
  ID: number;
  Name?: string;
  Description?: string;
  ReleaseDate: any;
  DiscontinuedDate?: any;
  Rating: number;
  Price: number;
  Categories?: Category[];
  Supplier?: Supplier;
  ProductDetail?: ProductDetail;
  //#endregion
}