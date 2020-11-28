import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { InternetMessageHeader } from './internetmessageheader.entity';
import { InternetMessageHeaderCollection } from './internetmessageheader.collection';
//#endregion

export class InternetMessageHeaderModel<E extends InternetMessageHeader> extends ODataModel<E> {
  //#region ODataApi Properties
  name?: string;
  value?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}