import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OptionalClaims } from './optionalclaims.complex';
import { OptionalClaimsModel } from './optionalclaims.model';
import { OptionalClaimsCollection } from './optionalclaims.collection';
//#endregion

export const OptionalClaimsConfig = {
  name: "optionalClaims",
  model: OptionalClaimsModel,
  collection: OptionalClaimsCollection,
  annotations: [],
  fields: {
    accessToken: {type: 'graph.optionalClaim', collection: true},
    idToken: {type: 'graph.optionalClaim', collection: true},
    saml2Token: {type: 'graph.optionalClaim', collection: true}
  }
} as StructuredTypeConfig<OptionalClaims>;