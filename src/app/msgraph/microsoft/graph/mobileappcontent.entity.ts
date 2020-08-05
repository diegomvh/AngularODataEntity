import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { MobileAppContentFile } from './mobileappcontentfile.entity';
//#endregion

export interface MobileAppContent extends Entity {
  //#region ODataApi Properties
  files?: MobileAppContentFile[];
  //#endregion
}