import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PublicErrorDetail } from './publicerrordetail.complex';
import { PublicInnerError } from './publicinnererror.complex';
import { PublicErrorDetailModel } from './publicerrordetail.model';
import { PublicInnerErrorModel } from './publicinnererror.model';
import { PublicErrorDetailCollection } from './publicerrordetail.collection';
import { PublicInnerErrorCollection } from './publicinnererror.collection';
//#endregion

export interface PublicError {
  //#region ODataApi Properties
  code?: string;
  details?: PublicErrorDetail[];
  innerError?: PublicInnerError;
  message?: string;
  target?: string;
  //#endregion
}