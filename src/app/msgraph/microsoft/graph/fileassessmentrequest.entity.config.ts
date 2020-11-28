import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { FileAssessmentRequest } from './fileassessmentrequest.entity';
import { FileAssessmentRequestModel } from './fileassessmentrequest.model';
import { FileAssessmentRequestCollection } from './fileassessmentrequest.collection';
//#endregion

export const FileAssessmentRequestConfig = {
  name: "fileAssessmentRequest",
  base: "microsoft.graph.threatAssessmentRequest",
  model: FileAssessmentRequestModel,
  collection: FileAssessmentRequestCollection,
  annotations: [],
  fields: {
    contentData: {type: 'Edm.String', nullable: false},
    fileName: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<FileAssessmentRequest>;