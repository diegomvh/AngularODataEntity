import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AverageComparativeScore } from './averagecomparativescore.entity';
//#endregion

export const AverageComparativeScoreConfig = {
  name: "averageComparativeScore",
  open: true,
  annotations: [],
  fields: {
    averageScore: {type: 'Edm.Double'},
    basis: {type: 'Edm.String'}
  }
} as EntityConfig<AverageComparativeScore>;