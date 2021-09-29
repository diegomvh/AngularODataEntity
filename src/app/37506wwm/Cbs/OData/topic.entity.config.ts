//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Topic } from './topic.entity';
import { TopicModel } from './topic.model';
import { TopicCollection } from './topic.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TopicEntityConfig = {
  name: "Topic",
  base: "Cbs.OData.DimensionOrTopic",
  model: TopicModel,
  collection: TopicCollection,
  fields: {
    Datatype: {type: 'Edm.String'},
    Unit: {type: 'Edm.String'},
    Decimals: {type: 'Edm.Byte'},
    Default: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Topic>;
//#endregion