import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CurrencyColumn } from './currencycolumn.entity';
//#endregion

export const CurrencyColumnConfig = {
  name: "currencyColumn",
  annotations: [],
  fields: {
    locale: {type: 'Edm.String'}
  }
} as EntityConfig<CurrencyColumn>;