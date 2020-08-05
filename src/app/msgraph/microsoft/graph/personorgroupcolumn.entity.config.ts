import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PersonOrGroupColumn } from './personorgroupcolumn.entity';
//#endregion

export const PersonOrGroupColumnConfig = {
  name: "PersonOrGroupColumn",
  annotations: [],
  fields: {
    allowMultipleSelection: {type: 'Edm.Boolean'},
    chooseFromType: {type: 'Edm.String'},
    displayAs: {type: 'Edm.String'}
  }
} as EntityConfig<PersonOrGroupColumn>;