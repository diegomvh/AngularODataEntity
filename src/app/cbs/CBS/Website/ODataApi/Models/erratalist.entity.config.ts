import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ErrataList } from './erratalist.entity';
//#endregion

export const ErrataListConfig = {
  name: "ErrataList",
  annotations: [],
  fields: {
    Items: {type: 'CBS.Website.ODataApi.Models.ErratumItem', collection: true}
  }
} as EntityConfig<ErrataList>;