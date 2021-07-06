//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
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
  //#endregion
}