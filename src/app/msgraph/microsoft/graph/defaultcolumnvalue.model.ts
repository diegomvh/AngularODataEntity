import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DefaultColumnValue } from './defaultcolumnvalue.complex';
import { DefaultColumnValueCollection } from './defaultcolumnvalue.collection';
//#endregion

export class DefaultColumnValueModel<E extends DefaultColumnValue> extends ODataModel<E> {
  //#region ODataApi Properties
  formula?: string;
  value?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}