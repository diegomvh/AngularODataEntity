import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { BaseItemVersion } from './baseitemversion.entity';
import { BaseItemVersionModel } from './baseitemversion.model';
import { BaseItemVersionCollection } from './baseitemversion.collection';
//#endregion

export interface DriveItemVersion extends BaseItemVersion {
  //#region ODataApi Properties
  content?: any;
  size?: number;
  //#endregion
}