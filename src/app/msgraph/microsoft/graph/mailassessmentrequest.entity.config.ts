import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MailAssessmentRequest } from './mailassessmentrequest.entity';
//#endregion

export const MailAssessmentRequestConfig = {
  name: "mailAssessmentRequest",
  base: "microsoft.graph.threatAssessmentRequest",
  annotations: [],
  fields: {
    recipientEmail: {type: 'Edm.String', nullable: false},
    destinationRoutingReason: {type: 'graph.mailDestinationRoutingReason'},
    messageUri: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<MailAssessmentRequest>;