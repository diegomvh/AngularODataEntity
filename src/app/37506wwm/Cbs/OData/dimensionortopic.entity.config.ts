import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DimensionOrTopic } from './dimensionortopic.entity';
import { DimensionOrTopicModel } from './dimensionortopic.model';
import { DimensionOrTopicCollection } from './dimensionortopic.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const DimensionOrTopicEntityConfig = {
  name: "DimensionOrTopic",
  model: DimensionOrTopicModel,
  collection: DimensionOrTopicCollection,
  keys: [{ref: 'ID'}],
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