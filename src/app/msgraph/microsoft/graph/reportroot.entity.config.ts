import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ReportRoot } from './reportroot.entity';
//#endregion

export const ReportRootConfig = {
  name: "reportRoot",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<ReportRoot>;