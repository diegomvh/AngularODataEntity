import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookWorksheetProtectionOptions } from './workbookworksheetprotectionoptions.complex';
import { WorkbookWorksheetProtectionOptionsModel } from './workbookworksheetprotectionoptions.model';
import { EntityModel } from './entity.model';
import { WorkbookWorksheetProtectionOptionsCollection } from './workbookworksheetprotectionoptions.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface WorkbookWorksheetProtection extends Entity {
  //#region ODataApi Properties
  options?: WorkbookWorksheetProtectionOptions;
  protected: boolean;
  //#endregion
}