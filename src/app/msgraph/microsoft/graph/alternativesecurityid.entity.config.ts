import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AlternativeSecurityId } from './alternativesecurityid.entity';
//#endregion

export const AlternativeSecurityIdConfig = {
  name: "alternativeSecurityId",
  annotations: [],
  fields: {
    type: {type: 'Edm.Int32'},
    identityProvider: {type: 'Edm.String'},
    key: {type: 'Edm.Binary'}
  }
} as EntityConfig<AlternativeSecurityId>;