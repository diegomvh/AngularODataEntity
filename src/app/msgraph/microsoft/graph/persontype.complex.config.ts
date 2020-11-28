import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PersonType } from './persontype.complex';
import { PersonTypeModel } from './persontype.model';
import { PersonTypeCollection } from './persontype.collection';
//#endregion

export const PersonTypeConfig = {
  name: "personType",
  model: PersonTypeModel,
  collection: PersonTypeCollection,
  annotations: [],
  fields: {
    class: {type: 'Edm.String'},
    subclass: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PersonType>;