//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Product } from './product.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
//#endregion

export interface ProductDetail {
  //#region ODataApi Properties
  ProductID: number;
  Details?: string;
  Product?: Product;
  //#endregion
}