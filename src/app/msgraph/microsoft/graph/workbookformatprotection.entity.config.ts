import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookFormatProtection } from './workbookformatprotection.entity';
//#endregion

export const WorkbookFormatProtectionConfig = {
  name: "WorkbookFormatProtection",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    formulaHidden: {type: 'Edm.Boolean'},
    locked: {type: 'Edm.Boolean'}
  }
} as EntityConfig<WorkbookFormatProtection>;