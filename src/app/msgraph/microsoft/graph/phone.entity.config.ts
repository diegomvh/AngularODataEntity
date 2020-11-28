import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Phone } from './phone.entity';
import { PhoneModel } from './phone.model';
import { PhoneCollection } from './phone.collection';
//#endregion

export const PhoneConfig = {
  name: "phone",
  model: PhoneModel,
  collection: PhoneCollection,
  annotations: [],
  fields: {
    language: {type: 'Edm.String'},
    number: {type: 'Edm.String'},
    region: {type: 'Edm.String'},
    type: {type: 'graph.phoneType'}
  }
} as EntityConfig<Phone>;