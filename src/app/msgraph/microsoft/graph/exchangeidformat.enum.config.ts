import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ExchangeIdFormat } from './exchangeidformat.enum';
//#endregion

export const ExchangeIdFormatConfig = {
  name: "exchangeIdFormat",
  members: ExchangeIdFormat
} as EnumTypeConfig<ExchangeIdFormat>;