import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { OnenoteEntityBaseModel } from './onenoteentitybasemodel.entity';
import { OnenoteEntityBaseModelModel } from './onenoteentitybasemodel.model';
//#endregion

export class OnenoteEntityBaseModelCollection<E extends OnenoteEntityBaseModel, M extends OnenoteEntityBaseModelModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}