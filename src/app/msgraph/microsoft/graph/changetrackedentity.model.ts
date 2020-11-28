import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { IdentitySet } from './identityset.entity';
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
import { ChangeTrackedEntityCollection } from './changetrackedentity.collection';
//#endregion

export class ChangeTrackedEntityModel<E extends ChangeTrackedEntity> extends EntityModel<E> {
  //#region ODataApi Properties
  createdDateTime?: Date;
  lastModifiedBy?: IdentitySetModel<IdentitySet>;
  lastModifiedDateTime?: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}