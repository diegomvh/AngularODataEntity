import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ScoredEmailAddress } from './scoredemailaddress.entity';
import { ScoredEmailAddressModel } from './scoredemailaddress.model';
import { ScoredEmailAddressCollection } from './scoredemailaddress.collection';
//#endregion

export const ScoredEmailAddressConfig = {
  name: "scoredEmailAddress",
  model: ScoredEmailAddressModel,
  collection: ScoredEmailAddressCollection,
  annotations: [],
  fields: {
    address: {type: 'Edm.String'},
    itemId: {type: 'Edm.String'},
    relevanceScore: {type: 'Edm.Double'},
    selectionLikelihood: {type: 'graph.selectionLikelihoodInfo'}
  }
} as EntityConfig<ScoredEmailAddress>;