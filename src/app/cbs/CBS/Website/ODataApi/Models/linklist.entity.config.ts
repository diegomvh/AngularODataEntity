import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { LinkList } from './linklist.entity';
//#endregion

export const LinkListConfig = {
  name: "LinkList",
  annotations: [],
  fields: {
    Items: {type: 'CBS.Website.ODataApi.Models.Link', collection: true}
  }
} as EntityConfig<LinkList>;