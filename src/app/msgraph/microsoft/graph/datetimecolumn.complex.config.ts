import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DateTimeColumn } from './datetimecolumn.complex';
import { DateTimeColumnModel } from './datetimecolumn.model';
import { DateTimeColumnCollection } from './datetimecolumn.collection';
//#endregion

export const DateTimeColumnConfig = {
  name: "dateTimeColumn",
  model: DateTimeColumnModel,
  collection: DateTimeColumnCollection,
  annotations: [],
  fields: {
    displayAs: {type: 'Edm.String'},
    format: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DateTimeColumn>;