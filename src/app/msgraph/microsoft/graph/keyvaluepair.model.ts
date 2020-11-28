import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { KeyValuePair } from './keyvaluepair.complex';
import { KeyValuePairCollection } from './keyvaluepair.collection';
//#endregion

export class KeyValuePairModel<E extends KeyValuePair> extends ODataModel<E> {
  //#region ODataApi Properties
  name: string;
  value?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}