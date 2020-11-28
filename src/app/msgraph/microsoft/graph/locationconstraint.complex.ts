import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { LocationConstraintItem } from './locationconstraintitem.complex';
import { LocationConstraintItemModel } from './locationconstraintitem.model';
import { LocationConstraintItemCollection } from './locationconstraintitem.collection';
//#endregion

export interface LocationConstraint {
  //#region ODataApi Properties
  isRequired?: boolean;
  locations?: LocationConstraintItem[];
  suggestLocation?: boolean;
  //#endregion
}