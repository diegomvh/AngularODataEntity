import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OptionalClaims } from './optionalclaims.entity';
//#endregion

export const OptionalClaimsConfig = {
  name: "optionalClaims",
  annotations: [],
  fields: {
    idToken: {type: 'graph.optionalClaim', collection: true},
    accessToken: {type: 'graph.optionalClaim', collection: true},
    saml2Token: {type: 'graph.optionalClaim', collection: true}
  }
} as EntityConfig<OptionalClaims>;