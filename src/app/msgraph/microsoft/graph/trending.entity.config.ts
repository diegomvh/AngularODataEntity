import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Trending } from './trending.entity';
//#endregion

export const TrendingConfig = {
  name: "Trending",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    weight: {type: 'Edm.Double', nullable: false},
    resourceVisualization: {type: 'graph.resourceVisualization'},
    resourceReference: {type: 'graph.resourceReference'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    resource: {type: 'graph.entity', navigation: true}
  }
} as EntityConfig<Trending>;