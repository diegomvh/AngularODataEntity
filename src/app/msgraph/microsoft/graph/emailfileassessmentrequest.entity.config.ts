import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EmailFileAssessmentRequest } from './emailfileassessmentrequest.entity';
//#endregion

export const EmailFileAssessmentRequestConfig = {
  name: "emailFileAssessmentRequest",
  base: "microsoft.graph.threatAssessmentRequest",
  annotations: [],
  fields: {
    recipientEmail: {type: 'Edm.String', nullable: false},
    destinationRoutingReason: {type: 'graph.mailDestinationRoutingReason'},
    contentData: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<EmailFileAssessmentRequest>;