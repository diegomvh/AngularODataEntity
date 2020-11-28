import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { GroupType } from './grouptype.enum';
import { ModifiedProperty } from './modifiedproperty.complex';
import { ModifiedPropertyModel } from './modifiedproperty.model';
import { ModifiedPropertyCollection } from './modifiedproperty.collection';
//#endregion

export interface TargetResource {
  //#region ODataApi Properties
  displayName?: string;
  groupType?: GroupType;
  id?: string;
  modifiedProperties?: ModifiedProperty[];
  type?: string;
  userPrincipalName?: string;
  //#endregion
}