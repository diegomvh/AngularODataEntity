import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ScoredEmailAddress } from './scoredemailaddress.entity';
//#endregion

export const ScoredEmailAddressConfig = {
  name: "ScoredEmailAddress",
  annotations: [],
  fields: {
    address: {type: 'Edm.String'},
    relevanceScore: {type: 'Edm.Double'},
    selectionLikelihood: {type: 'graph.selectionLikelihoodInfo'},
    itemId: {type: 'Edm.String'}
  }
} as EntityConfig<ScoredEmailAddress>;