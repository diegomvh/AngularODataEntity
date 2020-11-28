import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AverageComparativeScore } from './averagecomparativescore.complex';
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
} as StructuredTypeConfig<AverageComparativeScore>;