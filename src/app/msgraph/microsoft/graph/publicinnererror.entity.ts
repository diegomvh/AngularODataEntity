import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PublicErrorDetail } from './publicerrordetail.entity';
import { PublicErrorDetailModel } from './publicerrordetail.model';
import { PublicErrorDetailCollection } from './publicerrordetail.collection';
//#endregion

export interface PublicInnerError {
  //#region ODataApi Properties
  code?: string;
  details?: PublicErrorDetail[];
  message?: string;
  target?: string;
  //#endregion
}