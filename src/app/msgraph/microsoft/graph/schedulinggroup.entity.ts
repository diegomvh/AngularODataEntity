import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { ChangeTrackedEntityModel } from './changetrackedentity.model';
import { ChangeTrackedEntityCollection } from './changetrackedentity.collection';
//#endregion

export interface SchedulingGroup extends ChangeTrackedEntity {
  //#region ODataApi Properties
  displayName?: string;
  isActive?: boolean;
  userIds?: string[];
  //#endregion
}