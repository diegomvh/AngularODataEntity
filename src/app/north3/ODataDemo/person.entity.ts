//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { PersonDetail } from './persondetail.entity';
import { PersonDetailModel } from './persondetail.model';
import { PersonDetailCollection } from './persondetail.collection';
//#endregion

export interface Person {
  //#region ODataApi Properties
  ID: number;
  Name?: string;
  PersonDetail?: PersonDetail;
  //#endregion
}