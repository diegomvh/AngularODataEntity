import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TermsAndConditions } from './termsandconditions.entity';
//#endregion

export const TermsAndConditionsConfig = {
  name: "TermsAndConditions",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    displayName: {type: 'Edm.String', nullable: false},
    description: {type: 'Edm.String'},
    title: {type: 'Edm.String'},
    bodyText: {type: 'Edm.String'},
    acceptanceStatement: {type: 'Edm.String'},
    version: {type: 'Edm.Int32', nullable: false},
    assignments: {type: 'graph.termsAndConditionsAssignment', collection: true, navigation: true},
    acceptanceStatuses: {type: 'graph.termsAndConditionsAcceptanceStatus', collection: true, navigation: true}
  }
} as EntityConfig<TermsAndConditions>;