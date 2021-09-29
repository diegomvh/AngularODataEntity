//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DimensionOrTopic } from './dimensionortopic.entity';
import { DimensionOrTopicModel } from './dimensionortopic.model';
import { DimensionOrTopicCollection } from './dimensionortopic.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DimensionOrTopicEntityConfig = {
  name: "DimensionOrTopic",
  model: DimensionOrTopicModel,
  collection: DimensionOrTopicCollection,
  keys: [{name: 'ID'}],
  fields: {
    ID: {type: 'Edm.Int32', nullable: false},
    Position: {type: 'Edm.Int32'},
    ParentID: {type: 'Edm.Int32'},
    Type: {type: 'Edm.String'},
    Key: {type: 'Edm.String'},
    Title: {type: 'Edm.String'},
    Description: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DimensionOrTopic>;
//#endregion