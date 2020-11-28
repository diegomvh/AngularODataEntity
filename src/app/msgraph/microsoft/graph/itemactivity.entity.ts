import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { IdentitySet } from './identityset.entity';
import { AccessAction } from './accessaction.entity';
import { DriveItem } from './driveitem.entity';
import { IdentitySetModel } from './identityset.model';
import { AccessActionModel } from './accessaction.model';
import { EntityModel } from './entity.model';
import { DriveItemModel } from './driveitem.model';
import { IdentitySetCollection } from './identityset.collection';
import { AccessActionCollection } from './accessaction.collection';
import { EntityCollection } from './entity.collection';
import { DriveItemCollection } from './driveitem.collection';
//#endregion

export interface ItemActivity extends Entity {
  //#region ODataApi Properties
  access?: AccessAction;
  activityDateTime?: Date;
  actor?: IdentitySet;
  driveItem?: DriveItem;
  //#endregion
}