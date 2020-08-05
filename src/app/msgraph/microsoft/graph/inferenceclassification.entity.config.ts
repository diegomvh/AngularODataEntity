import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { InferenceClassification } from './inferenceclassification.entity';
//#endregion

export const InferenceClassificationConfig = {
  name: "InferenceClassification",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    overrides: {type: 'graph.inferenceClassificationOverride', collection: true, navigation: true}
  }
} as EntityConfig<InferenceClassification>;