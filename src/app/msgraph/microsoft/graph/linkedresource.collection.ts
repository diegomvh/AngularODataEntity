import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { LinkedResource } from './linkedresource.entity';
import { LinkedResourceModel } from './linkedresource.model';
//#endregion

export class LinkedResourceCollection<E extends LinkedResource, M extends LinkedResourceModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}