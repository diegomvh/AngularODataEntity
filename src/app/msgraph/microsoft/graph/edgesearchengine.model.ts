import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EdgeSearchEngineBaseModel } from './edgesearchenginebase.model';
import { EdgeSearchEngineType } from './edgesearchenginetype.enum';
import { EdgeSearchEngine } from './edgesearchengine.entity';
import { EdgeSearchEngineCollection } from './edgesearchengine.collection';
//#endregion

export class EdgeSearchEngineModel<E extends EdgeSearchEngine> extends EdgeSearchEngineBaseModel<E> {
  //#region ODataApi Properties
  edgeSearchEngineType: EdgeSearchEngineType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}