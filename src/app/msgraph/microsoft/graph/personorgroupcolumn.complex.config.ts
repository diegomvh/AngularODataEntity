import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PersonOrGroupColumn } from './personorgroupcolumn.complex';
import { PersonOrGroupColumnModel } from './personorgroupcolumn.model';
import { PersonOrGroupColumnCollection } from './personorgroupcolumn.collection';
//#endregion

export const PersonOrGroupColumnConfig = {
  name: "personOrGroupColumn",
  model: PersonOrGroupColumnModel,
  collection: PersonOrGroupColumnCollection,
  annotations: [],
  fields: {
    allowMultipleSelection: {type: 'Edm.Boolean'},
    chooseFromType: {type: 'Edm.String'},
    displayAs: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PersonOrGroupColumn>;