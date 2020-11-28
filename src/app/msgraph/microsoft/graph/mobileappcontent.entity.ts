import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { MobileAppContentFile } from './mobileappcontentfile.entity';
import { EntityModel } from './entity.model';
import { MobileAppContentFileModel } from './mobileappcontentfile.model';
import { EntityCollection } from './entity.collection';
import { MobileAppContentFileCollection } from './mobileappcontentfile.collection';
//#endregion

export interface MobileAppContent extends Entity {
  //#region ODataApi Properties
  files?: MobileAppContentFile[];
  //#endregion
}