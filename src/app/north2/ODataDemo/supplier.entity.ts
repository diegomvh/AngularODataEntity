//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Address } from './address.complex';
import { Product } from './product.entity';
import { AddressModel } from './address.model';
import { ProductModel } from './product.model';
import { AddressCollection } from './address.collection';
import { ProductCollection } from './product.collection';
//#endregion

export interface Supplier {
  //#region ODataApi Properties
  ID: number;
  Name?: string;
  Address: Address;
  Concurrency: number;
  Products?: Product[];
  //#endregion
}