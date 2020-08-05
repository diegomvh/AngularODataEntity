import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChoiceColumn } from './choicecolumn.entity';
//#endregion

export const ChoiceColumnConfig = {
  name: "ChoiceColumn",
  annotations: [],
  fields: {
    allowTextEntry: {type: 'Edm.Boolean'},
    choices: {type: 'Edm.String', collection: true},
    displayAs: {type: 'Edm.String'}
  }
} as EntityConfig<ChoiceColumn>;