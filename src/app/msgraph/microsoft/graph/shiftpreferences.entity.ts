import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { ShiftAvailability } from './shiftavailability.complex';
import { ShiftAvailabilityModel } from './shiftavailability.model';
import { ChangeTrackedEntityModel } from './changetrackedentity.model';
import { ShiftAvailabilityCollection } from './shiftavailability.collection';
import { ChangeTrackedEntityCollection } from './changetrackedentity.collection';
//#endregion

export interface ShiftPreferences extends ChangeTrackedEntity {
  //#region ODataApi Properties
  availability?: ShiftAvailability[];
  //#endregion
}