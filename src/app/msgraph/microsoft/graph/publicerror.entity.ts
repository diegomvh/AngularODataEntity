import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PublicErrorDetail } from './publicerrordetail.entity';
import { PublicInnerError } from './publicinnererror.entity';
//#endregion

export interface PublicError {
  //#region ODataApi Properties
  code?: string;
  message?: string;
  target?: string;
  details?: PublicErrorDetail[];
  innerError?: PublicInnerError;
  //#endregion
}