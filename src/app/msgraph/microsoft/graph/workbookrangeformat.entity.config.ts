import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookRangeFormat } from './workbookrangeformat.entity';
import { WorkbookRangeFormatModel } from './workbookrangeformat.model';
import { WorkbookRangeFormatCollection } from './workbookrangeformat.collection';
//#endregion

export const WorkbookRangeFormatConfig = {
  name: "workbookRangeFormat",
  base: "microsoft.graph.entity",
  model: WorkbookRangeFormatModel,
  collection: WorkbookRangeFormatCollection,
  annotations: [],
  fields: {
    columnWidth: {type: 'Edm.Double'},
    horizontalAlignment: {type: 'Edm.String'},
    rowHeight: {type: 'Edm.Double'},
    verticalAlignment: {type: 'Edm.String'},
    wrapText: {type: 'Edm.Boolean'},
    borders: {type: 'graph.workbookRangeBorder', collection: true, navigation: true},
    fill: {type: 'graph.workbookRangeFill', navigation: true},
    font: {type: 'graph.workbookRangeFont', navigation: true},
    protection: {type: 'graph.workbookFormatProtection', navigation: true}
  }
} as EntityConfig<WorkbookRangeFormat>;