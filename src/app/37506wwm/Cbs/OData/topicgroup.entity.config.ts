//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TopicGroup } from './topicgroup.entity';
import { TopicGroupModel } from './topicgroup.model';
import { TopicGroupCollection } from './topicgroup.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TopicGroupEntityConfig = {
  name: "TopicGroup",
  base: "Cbs.OData.DimensionOrTopic",
  model: TopicGroupModel,
  collection: TopicGroupCollection,
  fields: {
    
  }
} as StructuredTypeConfig<TopicGroup>;
//#endregion