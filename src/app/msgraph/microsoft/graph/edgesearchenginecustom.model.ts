import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EdgeSearchEngineBaseModel } from './edgesearchenginebase.model';
import { EdgeSearchEngineCustom } from './edgesearchenginecustom.complex';
import { EdgeSearchEngineCustomCollection } from './edgesearchenginecustom.collection';
//#endregion

export class EdgeSearchEngineCustomModel<E extends EdgeSearchEngineCustom> extends EdgeSearchEngineBaseModel<E> {
  //#region ODataApi Properties
  edgeSearchEngineOpenSearchXmlUrl: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}