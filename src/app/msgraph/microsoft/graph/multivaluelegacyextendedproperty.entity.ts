import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface MultiValueLegacyExtendedProperty extends Entity {
  //#region ODataApi Properties
  value?: string[];
  //#endregion
}