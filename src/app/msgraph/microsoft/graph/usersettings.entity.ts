import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ShiftPreferences } from './shiftpreferences.entity';
//#endregion

export interface UserSettings extends Entity {
  //#region ODataApi Properties
  contributionToContentDiscoveryDisabled: boolean;
  contributionToContentDiscoveryAsOrganizationDisabled: boolean;
  shiftPreferences?: ShiftPreferences;
  //#endregion
}