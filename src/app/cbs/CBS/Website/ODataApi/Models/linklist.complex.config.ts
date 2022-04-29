//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { LinkList } from './linklist.complex';
import { LinkListModel } from './linklist.model';
import { LinkListCollection } from './linklist.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const LinkListComplexConfig = {
  name: 'LinkList',
  model: LinkListModel,
  collection: LinkListCollection,
  fields: {
    Items: {type: 'CBS.Website.ODataApi.Models.Link', collection: true}
  }
} as StructuredTypeConfig<LinkList>;
//#endregion