import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EdgeSearchEngineBase } from './edgesearchenginebase.entity';
import { EdgeSearchEngineBaseModel } from './edgesearchenginebase.model';
//#endregion

export class EdgeSearchEngineBaseCollection<E extends EdgeSearchEngineBase, M extends EdgeSearchEngineBaseModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}