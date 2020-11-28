import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { InferenceClassification } from './inferenceclassification.entity';
import { InferenceClassificationModel } from './inferenceclassification.model';
import { InferenceClassificationCollection } from './inferenceclassification.collection';
//#endregion

export const InferenceClassificationConfig = {
  name: "inferenceClassification",
  base: "microsoft.graph.entity",
  model: InferenceClassificationModel,
  collection: InferenceClassificationCollection,
  annotations: [],
  fields: {
    overrides: {type: 'graph.inferenceClassificationOverride', collection: true, navigation: true}
  }
} as EntityConfig<InferenceClassification>;