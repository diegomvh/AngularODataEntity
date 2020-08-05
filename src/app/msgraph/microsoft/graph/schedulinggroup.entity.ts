import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
//#endregion

export interface SchedulingGroup extends ChangeTrackedEntity {
  //#region ODataApi Properties
  displayName?: string;
  isActive?: boolean;
  userIds?: string[];
  //#endregion
}