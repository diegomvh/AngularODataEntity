import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { InferenceClassificationType } from './inferenceclassificationtype.enum';
//#endregion

export const InferenceClassificationTypeConfig = {
  name: "InferenceClassificationType",
  members: InferenceClassificationType
} as EnumConfig<InferenceClassificationType>;