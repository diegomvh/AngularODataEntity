import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PersonDetail } from './persondetail.entity';
//#endregion

export interface Person {
  //#region ODataApi Properties
  ID: number;
  Name?: string;
  PersonDetail?: PersonDetail;
  //#endregion
}