import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PublicError } from './publicerror.entity';
import { PublicErrorDetail } from './publicerrordetail.entity';
import { PublicInnerError } from './publicinnererror.entity';
import { PublicErrorDetailModel } from './publicerrordetail.model';
import { PublicInnerErrorModel } from './publicinnererror.model';
import { PublicErrorCollection } from './publicerror.collection';
import { PublicErrorDetailCollection } from './publicerrordetail.collection';
import { PublicInnerErrorCollection } from './publicinnererror.collection';
//#endregion

export class PublicErrorModel<E extends PublicError> extends ODataModel<E> {
  //#region ODataApi Properties
  code?: string;
  details?: PublicErrorDetailCollection<PublicErrorDetail, PublicErrorDetailModel<PublicErrorDetail>>;
  innerError?: PublicInnerErrorModel<PublicInnerError>;
  message?: string;
  target?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}