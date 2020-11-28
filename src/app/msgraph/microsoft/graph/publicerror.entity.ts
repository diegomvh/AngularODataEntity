import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PublicErrorDetail } from './publicerrordetail.entity';
import { PublicInnerError } from './publicinnererror.entity';
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