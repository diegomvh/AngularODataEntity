import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Phone } from './phone.entity';
//#endregion

export const PhoneConfig = {
  name: "Phone",
  annotations: [],
  fields: {
    type: {type: 'graph.phoneType'},
    number: {type: 'Edm.String'},
    region: {type: 'Edm.String'},
    language: {type: 'Edm.String'}
  }
} as EntityConfig<Phone>;