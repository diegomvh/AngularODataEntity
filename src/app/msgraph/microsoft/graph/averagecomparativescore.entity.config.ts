import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AverageComparativeScore } from './averagecomparativescore.entity';
import { AverageComparativeScoreModel } from './averagecomparativescore.model';
import { AverageComparativeScoreCollection } from './averagecomparativescore.collection';
//#endregion

export const AverageComparativeScoreConfig = {
  name: "averageComparativeScore",
  open: true,
  model: AverageComparativeScoreModel,
  collection: AverageComparativeScoreCollection,
  annotations: [],
  fields: {
    averageScore: {type: 'Edm.Double'},
    basis: {type: 'Edm.String'}
  }
} as EntityConfig<AverageComparativeScore>;