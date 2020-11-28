import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Trending } from './trending.entity';
import { TrendingModel } from './trending.model';
import { TrendingCollection } from './trending.collection';
//#endregion

export const TrendingConfig = {
  name: "trending",
  base: "microsoft.graph.entity",
  model: TrendingModel,
  collection: TrendingCollection,
  annotations: [],
  fields: {
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    resourceReference: {type: 'graph.resourceReference'},
    resourceVisualization: {type: 'graph.resourceVisualization'},
    weight: {type: 'Edm.Double', nullable: false},
    resource: {type: 'graph.entity', navigation: true}
  }
} as StructuredTypeConfig<Trending>;