import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { GroupType } from './grouptype.enum';
import { ModifiedProperty } from './modifiedproperty.entity';
//#endregion

export interface TargetResource {
  //#region ODataApi Properties
  id?: string;
  displayName?: string;
  type?: string;
  userPrincipalName?: string;
  groupType?: GroupType;
  modifiedProperties?: ModifiedProperty[];
  //#endregion
}