import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AlternativeSecurityId } from './alternativesecurityid.complex';
import { AlternativeSecurityIdModel } from './alternativesecurityid.model';
import { AlternativeSecurityIdCollection } from './alternativesecurityid.collection';
//#endregion

export const AlternativeSecurityIdConfig = {
  name: "alternativeSecurityId",
  model: AlternativeSecurityIdModel,
  collection: AlternativeSecurityIdCollection,
  annotations: [],
  fields: {
    identityProvider: {type: 'Edm.String'},
    key: {type: 'Edm.Binary'},
    type: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<AlternativeSecurityId>;