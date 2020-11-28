import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { IdentitySet } from './identityset.entity';
import { ItemReference } from './itemreference.entity';
import { DriveRecipient } from './driverecipient.entity';
import { SharingInvitation } from './sharinginvitation.entity';
import { SharingLink } from './sharinglink.entity';
import { Permission } from './permission.entity';
import { IdentitySetModel } from './identityset.model';
import { ItemReferenceModel } from './itemreference.model';
import { DriveRecipientModel } from './driverecipient.model';
import { SharingInvitationModel } from './sharinginvitation.model';
import { SharingLinkModel } from './sharinglink.model';
import { PermissionModel } from './permission.model';
import { IdentitySetCollection } from './identityset.collection';
import { ItemReferenceCollection } from './itemreference.collection';
import { DriveRecipientCollection } from './driverecipient.collection';
import { SharingInvitationCollection } from './sharinginvitation.collection';
import { SharingLinkCollection } from './sharinglink.collection';
//#endregion

export class PermissionCollection<E extends Permission, M extends PermissionModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}