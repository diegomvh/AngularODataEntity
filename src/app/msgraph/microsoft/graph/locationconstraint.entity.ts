import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { LocationConstraintItem } from './locationconstraintitem.entity';
//#endregion

export interface LocationConstraint {
  //#region ODataApi Properties
  locations?: LocationConstraintItem[];
  isRequired?: boolean;
  suggestLocation?: boolean;
  //#endregion
}