import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface OnPremisesConditionalAccessSettings extends Entity {
  //#region ODataApi Properties
  enabled: boolean;
  includedGroups: string[];
  excludedGroups: string[];
  overrideDefaultRule: boolean;
  //#endregion
}