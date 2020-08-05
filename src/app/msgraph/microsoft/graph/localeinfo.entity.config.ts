import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { LocaleInfo } from './localeinfo.entity';
//#endregion

export const LocaleInfoConfig = {
  name: "LocaleInfo",
  annotations: [],
  fields: {
    locale: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'}
  }
} as EntityConfig<LocaleInfo>;