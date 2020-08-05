import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { FileAssessmentRequest } from './fileassessmentrequest.entity';
//#endregion

export const FileAssessmentRequestConfig = {
  name: "fileAssessmentRequest",
  base: "microsoft.graph.threatAssessmentRequest",
  annotations: [],
  fields: {
    fileName: {type: 'Edm.String', nullable: false},
    contentData: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<FileAssessmentRequest>;