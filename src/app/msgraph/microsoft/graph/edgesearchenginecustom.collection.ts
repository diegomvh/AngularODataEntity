import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EdgeSearchEngineBaseCollection } from './edgesearchenginebase.collection';
import { EdgeSearchEngineCustom } from './edgesearchenginecustom.entity';
import { EdgeSearchEngineCustomModel } from './edgesearchenginecustom.model';
//#endregion

export class EdgeSearchEngineCustomCollection<E extends EdgeSearchEngineCustom, M extends EdgeSearchEngineCustomModel<E>> extends EdgeSearchEngineBaseCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}