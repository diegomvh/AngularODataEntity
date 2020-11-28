import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EdgeSearchEngineBaseCollection } from './edgesearchenginebase.collection';
import { EdgeSearchEngineType } from './edgesearchenginetype.enum';
import { EdgeSearchEngine } from './edgesearchengine.entity';
import { EdgeSearchEngineModel } from './edgesearchengine.model';
//#endregion

export class EdgeSearchEngineCollection<E extends EdgeSearchEngine, M extends EdgeSearchEngineModel<E>> extends EdgeSearchEngineBaseCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}