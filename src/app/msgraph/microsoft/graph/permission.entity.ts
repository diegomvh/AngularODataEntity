import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { IdentitySet } from './identityset.entity';
import { ItemReference } from './itemreference.entity';
import { SharingInvitation } from './sharinginvitation.entity';
import { SharingLink } from './sharinglink.entity';
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