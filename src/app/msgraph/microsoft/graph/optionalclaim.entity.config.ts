import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OptionalClaim } from './optionalclaim.entity';
//#endregion

export const OptionalClaimConfig = {
  name: "optionalClaim",
  annotations: [],
  fields: {
    name: {type: 'Edm.String', nullable: false},
    source: {type: 'Edm.String'},
    essential: {type: 'Edm.Boolean', nullable: false},
    additionalProperties: {type: 'Edm.String', collection: true}
  }
} as EntityConfig<OptionalClaim>;