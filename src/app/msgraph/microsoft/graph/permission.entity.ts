import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { IdentitySet } from './identityset.entity';
import { ItemReference } from './itemreference.entity';
import { SharingInvitation } from './sharinginvitation.entity';
import { SharingLink } from './sharinglink.entity';
import { IdentitySetModel } from './identityset.model';
import { ItemReferenceModel } from './itemreference.model';
import { SharingInvitationModel } from './sharinginvitation.model';
import { SharingLinkModel } from './sharinglink.model';
import { EntityModel } from './entity.model';
import { IdentitySetCollection } from './identityset.collection';
import { ItemReferenceCollection } from './itemreference.collection';
import { SharingInvitationCollection } from './sharinginvitation.collection';
import { SharingLinkCollection } from './sharinglink.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface Permission extends Entity {
  //#region ODataApi Properties
  expirationDateTime?: Date;
  grantedTo?: IdentitySet;
  grantedToIdentities?: IdentitySet[];
  hasPassword?: boolean;
  inheritedFrom?: ItemReference;
  invitation?: SharingInvitation;
  link?: SharingLink;
  roles?: string[];
  shareId?: string;
  //#endregion
}