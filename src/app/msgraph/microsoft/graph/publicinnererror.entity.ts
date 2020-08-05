import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PublicErrorDetail } from './publicerrordetail.entity';
//#endregion

export interface PublicInnerError {
  //#region ODataApi Properties
  code?: string;
  details?: PublicErrorDetail[];
  message?: string;
  target?: string;
  //#endregion
}