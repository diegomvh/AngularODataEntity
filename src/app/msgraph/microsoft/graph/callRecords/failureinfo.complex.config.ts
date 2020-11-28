import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { FailureInfo } from './failureinfo.complex';
import { FailureInfoModel } from './failureinfo.model';
import { FailureInfoCollection } from './failureinfo.collection';
//#endregion

export const FailureInfoConfig = {
  name: "failureInfo",
  model: FailureInfoModel,
  collection: FailureInfoCollection,
  annotations: [],
  fields: {
    reason: {type: 'Edm.String'},
    stage: {type: 'microsoft.graph.callRecords.failureStage', nullable: false}
  }
} as StructuredTypeConfig<FailureInfo>;