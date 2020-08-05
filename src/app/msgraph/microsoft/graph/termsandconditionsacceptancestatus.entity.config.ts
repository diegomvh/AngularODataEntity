import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TermsAndConditionsAcceptanceStatus } from './termsandconditionsacceptancestatus.entity';
//#endregion

export const TermsAndConditionsAcceptanceStatusConfig = {
  name: "termsAndConditionsAcceptanceStatus",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    userDisplayName: {type: 'Edm.String'},
    acceptedVersion: {type: 'Edm.Int32', nullable: false},
    acceptedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    userPrincipalName: {type: 'Edm.String'},
    termsAndConditions: {type: 'graph.termsAndConditions', navigation: true}
  }
} as EntityConfig<TermsAndConditionsAcceptanceStatus>;