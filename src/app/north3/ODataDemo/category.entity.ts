//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Product } from './product.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
//#endregion

export interface Category {
  //#region ODataApi Properties
  ID: number;
  Name?: string;
  Products?: Product[];
  //#endregion
}