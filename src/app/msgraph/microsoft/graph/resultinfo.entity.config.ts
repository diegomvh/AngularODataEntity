import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResultInfo } from './resultinfo.entity';
//#endregion

export const ResultInfoConfig = {
  name: "resultInfo",
  annotations: [],
  fields: {
    code: {type: 'Edm.Int32', nullable: false},
    subcode: {type: 'Edm.Int32', nullable: false},
    message: {type: 'Edm.String'}
  }
} as EntityConfig<ResultInfo>;