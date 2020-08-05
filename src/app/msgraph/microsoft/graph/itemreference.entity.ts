import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { SharepointIds } from './sharepointids.entity';
//#endregion

export interface ItemReference {
  //#region ODataApi Properties
  driveId?: string;
  driveType?: string;
  id?: string;
  name?: string;
  path?: string;
  shareId?: string;
  sharepointIds?: SharepointIds;
  siteId?: string;
  //#endregion
}