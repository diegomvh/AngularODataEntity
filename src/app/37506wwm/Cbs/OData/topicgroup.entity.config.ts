import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TopicGroup } from './topicgroup.entity';
import { TopicGroupModel } from './topicgroup.model';
import { TopicGroupCollection } from './topicgroup.collection';
//#endregion

export const TopicGroupConfig = {
  name: "TopicGroup",
  base: "Cbs.OData.DimensionOrTopic",
  model: TopicGroupModel,
  collection: TopicGroupCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<TopicGroup>;