import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PublicErrorDetail } from './publicerrordetail.complex';
import { PublicInnerError } from './publicinnererror.complex';
import { PublicErrorDetailModel } from './publicerrordetail.model';
import { PublicErrorDetailCollection } from './publicerrordetail.collection';
import { PublicInnerErrorCollection } from './publicinnererror.collection';
//#endregion

export class PublicInnerErrorModel<E extends PublicInnerError> extends ODataModel<E> {
  //#region ODataApi Properties
  code?: string;
  details?: PublicErrorDetailCollection<PublicErrorDetail, PublicErrorDetailModel<PublicErrorDetail>>;
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