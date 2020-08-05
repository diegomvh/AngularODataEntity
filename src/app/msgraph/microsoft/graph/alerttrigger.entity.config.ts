import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AlertTrigger } from './alerttrigger.entity';
//#endregion

export const AlertTriggerConfig = {
  name: "AlertTrigger",
  annotations: [],
  fields: {
    name: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    value: {type: 'Edm.String'}
  }
} as EntityConfig<AlertTrigger>;