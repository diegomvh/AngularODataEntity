import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MailAssessmentRequest } from './mailassessmentrequest.entity';
import { MailAssessmentRequestModel } from './mailassessmentrequest.model';
import { MailAssessmentRequestCollection } from './mailassessmentrequest.collection';
//#endregion

export const MailAssessmentRequestConfig = {
  name: "mailAssessmentRequest",
  base: "microsoft.graph.threatAssessmentRequest",
  model: MailAssessmentRequestModel,
  collection: MailAssessmentRequestCollection,
  annotations: [],
  fields: {
    destinationRoutingReason: {type: 'graph.mailDestinationRoutingReason'},
    messageUri: {type: 'Edm.String', nullable: false},
    recipientEmail: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<MailAssessmentRequest>;