import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ResourceReference } from './resourcereference.entity';
import { ResourceReferenceModel } from './resourcereference.model';
//#endregion

export class ResourceReferenceCollection<E extends ResourceReference, M extends ResourceReferenceModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}