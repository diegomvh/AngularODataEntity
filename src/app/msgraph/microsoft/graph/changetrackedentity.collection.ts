import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { IdentitySet } from './identityset.complex';
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { IdentitySetModel } from './identityset.model';
import { ChangeTrackedEntityModel } from './changetrackedentity.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export class ChangeTrackedEntityCollection<E extends ChangeTrackedEntity, M extends ChangeTrackedEntityModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}