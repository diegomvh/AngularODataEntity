import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PersonType } from './persontype.entity';
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
} as EntityConfig<PersonType>;