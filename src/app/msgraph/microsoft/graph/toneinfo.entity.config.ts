import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ToneInfo } from './toneinfo.entity';
//#endregion

export const ToneInfoConfig = {
  name: "ToneInfo",
  annotations: [],
  fields: {
    sequenceId: {type: 'Edm.Int64', nullable: false},
    tone: {type: 'graph.tone', nullable: false}
  }
} as EntityConfig<ToneInfo>;