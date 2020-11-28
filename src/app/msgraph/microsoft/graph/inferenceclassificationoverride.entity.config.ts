import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { InferenceClassificationOverride } from './inferenceclassificationoverride.entity';
import { InferenceClassificationOverrideModel } from './inferenceclassificationoverride.model';
import { InferenceClassificationOverrideCollection } from './inferenceclassificationoverride.collection';
//#endregion

export const InferenceClassificationOverrideConfig = {
  name: "inferenceClassificationOverride",
  base: "microsoft.graph.entity",
  model: InferenceClassificationOverrideModel,
  collection: InferenceClassificationOverrideCollection,
  annotations: [],
  fields: {
    classifyAs: {type: 'graph.inferenceClassificationType'},
    senderEmailAddress: {type: 'graph.emailAddress'}
  }
} as StructuredTypeConfig<InferenceClassificationOverride>;