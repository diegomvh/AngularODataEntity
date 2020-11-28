import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { EmailFileAssessmentRequest } from './emailfileassessmentrequest.entity';
import { EmailFileAssessmentRequestModel } from './emailfileassessmentrequest.model';
import { EmailFileAssessmentRequestCollection } from './emailfileassessmentrequest.collection';
//#endregion

export const EmailFileAssessmentRequestConfig = {
  name: "emailFileAssessmentRequest",
  base: "microsoft.graph.threatAssessmentRequest",
  model: EmailFileAssessmentRequestModel,
  collection: EmailFileAssessmentRequestCollection,
  annotations: [],
  fields: {
    contentData: {type: 'Edm.String', nullable: false},
    destinationRoutingReason: {type: 'graph.mailDestinationRoutingReason'},
    recipientEmail: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<EmailFileAssessmentRequest>;