import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OptionalClaim } from './optionalclaim.entity';
import { OptionalClaimModel } from './optionalclaim.model';
import { OptionalClaimCollection } from './optionalclaim.collection';
//#endregion

export const OptionalClaimConfig = {
  name: "optionalClaim",
  model: OptionalClaimModel,
  collection: OptionalClaimCollection,
  annotations: [],
  fields: {
    additionalProperties: {type: 'Edm.String', collection: true},
    essential: {type: 'Edm.Boolean', nullable: false},
    name: {type: 'Edm.String', nullable: false},
    source: {type: 'Edm.String'}
  }
} as EntityConfig<OptionalClaim>;