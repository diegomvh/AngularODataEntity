import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PersonType } from './persontype.entity';
//#endregion

export const PersonTypeConfig = {
  name: "personType",
  annotations: [],
  fields: {
    class: {type: 'Edm.String'},
    subclass: {type: 'Edm.String'}
  }
} as EntityConfig<PersonType>;