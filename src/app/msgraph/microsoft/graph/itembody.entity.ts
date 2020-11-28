import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { BodyType } from './bodytype.enum';
//#endregion

export interface ItemBody {
  //#region ODataApi Properties
  content?: string;
  contentType?: BodyType;
  //#endregion
}