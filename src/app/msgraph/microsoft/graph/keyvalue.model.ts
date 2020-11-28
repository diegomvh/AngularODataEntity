import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { KeyValue } from './keyvalue.entity';
import { KeyValueCollection } from './keyvalue.collection';
//#endregion

export class KeyValueModel<E extends KeyValue> extends ODataModel<E> {
  //#region ODataApi Properties
  key?: string;
  value?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}