import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookWorksheetProtection } from './workbookworksheetprotection.entity';
//#endregion

export const WorkbookWorksheetProtectionConfig = {
  name: "workbookWorksheetProtection",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    options: {type: 'graph.workbookWorksheetProtectionOptions'},
    protected: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<WorkbookWorksheetProtection>;