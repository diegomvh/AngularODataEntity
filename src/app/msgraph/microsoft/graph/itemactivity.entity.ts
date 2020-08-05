import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { IdentitySet } from './identityset.entity';
import { AccessAction } from './accessaction.entity';
import { DriveItem } from './driveitem.entity';
//#endregion

export interface ItemActivity extends Entity {
  //#region ODataApi Properties
  access?: AccessAction;
  activityDateTime?: Date;
  actor?: IdentitySet;
  driveItem?: DriveItem;
  //#endregion
}