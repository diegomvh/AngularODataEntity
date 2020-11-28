import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TermsAndConditions } from './termsandconditions.entity';
import { TermsAndConditionsModel } from './termsandconditions.model';
import { TermsAndConditionsCollection } from './termsandconditions.collection';
//#endregion

export const TermsAndConditionsConfig = {
  name: "termsAndConditions",
  base: "microsoft.graph.entity",
  model: TermsAndConditionsModel,
  collection: TermsAndConditionsCollection,
  annotations: [],
  fields: {
    acceptanceStatement: {type: 'Edm.String'},
    bodyText: {type: 'Edm.String'},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String', nullable: false},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    title: {type: 'Edm.String'},
    version: {type: 'Edm.Int32', nullable: false},
    acceptanceStatuses: {type: 'graph.termsAndConditionsAcceptanceStatus', collection: true, navigation: true},
    assignments: {type: 'graph.termsAndConditionsAssignment', collection: true, navigation: true}
  }
} as StructuredTypeConfig<TermsAndConditions>;