import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookWorksheetProtection } from './workbookworksheetprotection.entity';
import { WorkbookWorksheetProtectionModel } from './workbookworksheetprotection.model';
import { WorkbookWorksheetProtectionCollection } from './workbookworksheetprotection.collection';
//#endregion

export const WorkbookWorksheetProtectionConfig = {
  name: "workbookWorksheetProtection",
  base: "microsoft.graph.entity",
  model: WorkbookWorksheetProtectionModel,
  collection: WorkbookWorksheetProtectionCollection,
  annotations: [],
  fields: {
    options: {type: 'graph.workbookWorksheetProtectionOptions'},
    protected: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<WorkbookWorksheetProtection>;