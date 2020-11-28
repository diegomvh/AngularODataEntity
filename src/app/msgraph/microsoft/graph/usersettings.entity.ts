import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ShiftPreferences } from './shiftpreferences.entity';
import { EntityModel } from './entity.model';
import { ShiftPreferencesModel } from './shiftpreferences.model';
import { EntityCollection } from './entity.collection';
import { ShiftPreferencesCollection } from './shiftpreferences.collection';
//#endregion

export interface UserSettings extends Entity {
  //#region ODataApi Properties
  contributionToContentDiscoveryAsOrganizationDisabled: boolean;
  contributionToContentDiscoveryDisabled: boolean;
  shiftPreferences?: ShiftPreferences;
  //#endregion
}