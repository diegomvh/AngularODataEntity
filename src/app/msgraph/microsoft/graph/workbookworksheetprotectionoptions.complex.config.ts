import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookWorksheetProtectionOptions } from './workbookworksheetprotectionoptions.complex';
import { WorkbookWorksheetProtectionOptionsModel } from './workbookworksheetprotectionoptions.model';
import { WorkbookWorksheetProtectionOptionsCollection } from './workbookworksheetprotectionoptions.collection';
//#endregion

export const WorkbookWorksheetProtectionOptionsConfig = {
  name: "workbookWorksheetProtectionOptions",
  model: WorkbookWorksheetProtectionOptionsModel,
  collection: WorkbookWorksheetProtectionOptionsCollection,
  annotations: [],
  fields: {
    allowAutoFilter: {type: 'Edm.Boolean', nullable: false},
    allowDeleteColumns: {type: 'Edm.Boolean', nullable: false},
    allowDeleteRows: {type: 'Edm.Boolean', nullable: false},
    allowFormatCells: {type: 'Edm.Boolean', nullable: false},
    allowFormatColumns: {type: 'Edm.Boolean', nullable: false},
    allowFormatRows: {type: 'Edm.Boolean', nullable: false},
    allowInsertColumns: {type: 'Edm.Boolean', nullable: false},
    allowInsertHyperlinks: {type: 'Edm.Boolean', nullable: false},
    allowInsertRows: {type: 'Edm.Boolean', nullable: false},
    allowPivotTables: {type: 'Edm.Boolean', nullable: false},
    allowSort: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<WorkbookWorksheetProtectionOptions>;