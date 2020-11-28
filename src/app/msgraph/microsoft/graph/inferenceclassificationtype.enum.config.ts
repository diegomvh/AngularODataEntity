import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { InferenceClassificationType } from './inferenceclassificationtype.enum';
//#endregion

export const InferenceClassificationTypeConfig = {
  name: "inferenceClassificationType",
  members: InferenceClassificationType
} as EnumTypeConfig<InferenceClassificationType>;