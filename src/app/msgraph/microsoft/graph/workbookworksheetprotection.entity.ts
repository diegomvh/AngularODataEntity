import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookWorksheetProtectionOptions } from './workbookworksheetprotectionoptions.entity';
//#endregion

export interface WorkbookWorksheetProtection extends Entity {
  //#region ODataApi Properties
  options?: WorkbookWorksheetProtectionOptions;
  protected: boolean;
  //#endregion
}