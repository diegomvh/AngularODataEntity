import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { FailureInfo } from './failureinfo.entity';
//#endregion

export const FailureInfoConfig = {
  name: "failureInfo",
  annotations: [],
  fields: {
    stage: {type: 'microsoft.graph.callRecords.failureStage', nullable: false},
    reason: {type: 'Edm.String'}
  }
} as EntityConfig<FailureInfo>;