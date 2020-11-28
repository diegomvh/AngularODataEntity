import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TermsAndConditionsAcceptanceStatus } from './termsandconditionsacceptancestatus.entity';
import { TermsAndConditionsAcceptanceStatusModel } from './termsandconditionsacceptancestatus.model';
import { TermsAndConditionsAcceptanceStatusCollection } from './termsandconditionsacceptancestatus.collection';
//#endregion

export const TermsAndConditionsAcceptanceStatusConfig = {
  name: "termsAndConditionsAcceptanceStatus",
  base: "microsoft.graph.entity",
  model: TermsAndConditionsAcceptanceStatusModel,
  collection: TermsAndConditionsAcceptanceStatusCollection,
  annotations: [],
  fields: {
    acceptedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    acceptedVersion: {type: 'Edm.Int32', nullable: false},
    userDisplayName: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'},
    termsAndConditions: {type: 'graph.termsAndConditions', navigation: true}
  }
} as EntityConfig<TermsAndConditionsAcceptanceStatus>;