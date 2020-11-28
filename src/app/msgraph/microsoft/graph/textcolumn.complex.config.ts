import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TextColumn } from './textcolumn.complex';
import { TextColumnModel } from './textcolumn.model';
import { TextColumnCollection } from './textcolumn.collection';
//#endregion

export const TextColumnConfig = {
  name: "textColumn",
  model: TextColumnModel,
  collection: TextColumnCollection,
  annotations: [],
  fields: {
    allowMultipleLines: {type: 'Edm.Boolean'},
    appendChangesToExistingText: {type: 'Edm.Boolean'},
    linesForEditing: {type: 'Edm.Int32'},
    maxLength: {type: 'Edm.Int32'},
    textType: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<TextColumn>;