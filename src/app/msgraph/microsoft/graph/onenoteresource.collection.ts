import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenoteEntityBaseModelCollection } from './onenoteentitybasemodel.collection';
import { OnenoteResource } from './onenoteresource.entity';
import { OnenoteResourceModel } from './onenoteresource.model';
//#endregion

export class OnenoteResourceCollection<E extends OnenoteResource, M extends OnenoteResourceModel<E>> extends OnenoteEntityBaseModelCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}