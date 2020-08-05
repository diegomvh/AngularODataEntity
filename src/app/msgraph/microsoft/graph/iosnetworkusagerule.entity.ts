import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { AppListItem } from './applistitem.entity';
//#endregion

export interface IosNetworkUsageRule {
  //#region ODataApi Properties
  managedApps?: AppListItem[];
  cellularDataBlockWhenRoaming: boolean;
  cellularDataBlocked: boolean;
  //#endregion
}