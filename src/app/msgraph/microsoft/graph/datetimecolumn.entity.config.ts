import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DateTimeColumn } from './datetimecolumn.entity';
//#endregion

export const DateTimeColumnConfig = {
  name: "dateTimeColumn",
  annotations: [],
  fields: {
    displayAs: {type: 'Edm.String'},
    format: {type: 'Edm.String'}
  }
} as EntityConfig<DateTimeColumn>;