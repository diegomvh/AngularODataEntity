import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MailTipsError } from './mailtipserror.complex';
import { MailTipsErrorCollection } from './mailtipserror.collection';
//#endregion

export class MailTipsErrorModel<E extends MailTipsError> extends ODataModel<E> {
  //#region ODataApi Properties
  code?: string;
  message?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}