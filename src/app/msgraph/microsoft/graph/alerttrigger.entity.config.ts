import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AlertTrigger } from './alerttrigger.entity';
import { AlertTriggerModel } from './alerttrigger.model';
import { AlertTriggerCollection } from './alerttrigger.collection';
//#endregion

export const AlertTriggerConfig = {
  name: "alertTrigger",
  model: AlertTriggerModel,
  collection: AlertTriggerCollection,
  annotations: [],
  fields: {
    name: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    value: {type: 'Edm.String'}
  }
} as EntityConfig<AlertTrigger>;