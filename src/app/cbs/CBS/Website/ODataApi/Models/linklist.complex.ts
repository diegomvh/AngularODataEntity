//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Link } from './link.complex';
import { LinkModel } from './link.model';
import { LinkCollection } from './link.collection';
//#endregion

export interface LinkList {
  //#region ODataApi Properties
  Items?: Link[];
  //#endregion
}