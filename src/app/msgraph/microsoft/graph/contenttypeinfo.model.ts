import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ContentTypeInfo } from './contenttypeinfo.complex';
import { ContentTypeInfoCollection } from './contenttypeinfo.collection';
//#endregion

export class ContentTypeInfoModel<E extends ContentTypeInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  id?: string;
  name?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}