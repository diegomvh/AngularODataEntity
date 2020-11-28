import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookFormatProtection } from './workbookformatprotection.entity';
import { WorkbookFormatProtectionModel } from './workbookformatprotection.model';
import { WorkbookFormatProtectionCollection } from './workbookformatprotection.collection';
//#endregion

export const WorkbookFormatProtectionConfig = {
  name: "workbookFormatProtection",
  base: "microsoft.graph.entity",
  model: WorkbookFormatProtectionModel,
  collection: WorkbookFormatProtectionCollection,
  annotations: [],
  fields: {
    formulaHidden: {type: 'Edm.Boolean'},
    locked: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<WorkbookFormatProtection>;