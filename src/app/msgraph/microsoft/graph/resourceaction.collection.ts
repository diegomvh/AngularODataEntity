import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ResourceAction } from './resourceaction.entity';
import { ResourceActionModel } from './resourceaction.model';
//#endregion

export class ResourceActionCollection<E extends ResourceAction, M extends ResourceActionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}