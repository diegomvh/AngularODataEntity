import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { ShiftAvailability } from './shiftavailability.entity';
//#endregion

export interface ShiftPreferences extends ChangeTrackedEntity {
  //#region ODataApi Properties
  availability?: ShiftAvailability[];
  //#endregion
}