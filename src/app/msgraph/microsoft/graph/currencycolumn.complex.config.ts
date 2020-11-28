import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CurrencyColumn } from './currencycolumn.complex';
import { CurrencyColumnModel } from './currencycolumn.model';
import { CurrencyColumnCollection } from './currencycolumn.collection';
//#endregion

export const CurrencyColumnConfig = {
  name: "currencyColumn",
  model: CurrencyColumnModel,
  collection: CurrencyColumnCollection,
  annotations: [],
  fields: {
    locale: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<CurrencyColumn>;