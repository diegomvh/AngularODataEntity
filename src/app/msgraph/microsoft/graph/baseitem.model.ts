import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { IdentitySet } from './identityset.entity';
import { ItemReference } from './itemreference.entity';
import { User } from './user.entity';
import { BaseItem } from './baseitem.entity';
import { IdentitySetModel } from './identityset.model';
import { ItemReferenceModel } from './itemreference.model';
import { UserModel } from './user.model';
import { IdentitySetCollection } from './identityset.collection';
import { ItemReferenceCollection } from './itemreference.collection';
import { UserCollection } from './user.collection';
import { BaseItemCollection } from './baseitem.collection';
//#endregion

export class BaseItemModel<E extends BaseItem> extends EntityModel<E> {
  //#region ODataApi Properties
  createdBy?: IdentitySetModel<IdentitySet>;
  createdDateTime: Date;
  description?: string;
  eTag?: string;
  lastModifiedBy?: IdentitySetModel<IdentitySet>;
  lastModifiedDateTime: Date;
  name?: string;
  parentReference?: ItemReferenceModel<ItemReference>;
  webUrl?: string;
  createdByUser?: UserModel<User>;
  lastModifiedByUser?: UserModel<User>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}