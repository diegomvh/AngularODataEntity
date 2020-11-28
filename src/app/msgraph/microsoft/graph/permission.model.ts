import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
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
import { IdentitySetCollection } from './identityset.collection';
import { ItemReferenceCollection } from './itemreference.collection';
import { DriveRecipientCollection } from './driverecipient.collection';
import { SharingInvitationCollection } from './sharinginvitation.collection';
import { SharingLinkCollection } from './sharinglink.collection';
import { PermissionCollection } from './permission.collection';
//#endregion

export class PermissionModel<E extends Permission> extends EntityModel<E> {
  //#region ODataApi Properties
  expirationDateTime?: Date;
  grantedTo?: IdentitySetModel<IdentitySet>;
  grantedToIdentities?: IdentitySetCollection<IdentitySet, IdentitySetModel<IdentitySet>>;
  hasPassword?: boolean;
  inheritedFrom?: ItemReferenceModel<ItemReference>;
  invitation?: SharingInvitationModel<SharingInvitation>;
  link?: SharingLinkModel<SharingLink>;
  roles?: string[];
  shareId?: string;
  //#endregion
  //#region ODataApi Actions
  public grant(roles: string[], recipients: DriveRecipient[], options?: HttpOptions): Observable<PermissionCollection<Permission, PermissionModel<Permission>>> {
    var res = this._action<{roles: string[], recipients: DriveRecipient[]}, Permission>('microsoft.graph.grant');
    res.segment.entitySet('');
    return res.call({roles, recipients}, 'collection', options) as Observable<PermissionCollection<Permission, PermissionModel<Permission>>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}