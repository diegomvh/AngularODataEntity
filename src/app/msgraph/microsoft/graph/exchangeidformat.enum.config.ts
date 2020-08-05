import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ExchangeIdFormat } from './exchangeidformat.enum';
//#endregion

export const ExchangeIdFormatConfig = {
  name: "ExchangeIdFormat",
  members: ExchangeIdFormat
} as EnumConfig<ExchangeIdFormat>;