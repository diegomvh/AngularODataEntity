import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { InferenceClassificationOverride } from './inferenceclassificationoverride.entity';
//#endregion

export const InferenceClassificationOverrideConfig = {
  name: "inferenceClassificationOverride",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    classifyAs: {type: 'graph.inferenceClassificationType'},
    senderEmailAddress: {type: 'graph.emailAddress'}
  }
} as EntityConfig<InferenceClassificationOverride>;