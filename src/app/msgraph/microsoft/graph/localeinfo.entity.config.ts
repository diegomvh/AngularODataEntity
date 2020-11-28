import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { LocaleInfo } from './localeinfo.entity';
import { LocaleInfoModel } from './localeinfo.model';
import { LocaleInfoCollection } from './localeinfo.collection';
//#endregion

export const LocaleInfoConfig = {
  name: "localeInfo",
  model: LocaleInfoModel,
  collection: LocaleInfoCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    locale: {type: 'Edm.String'}
  }
} as EntityConfig<LocaleInfo>;