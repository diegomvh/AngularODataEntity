import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ReportRoot } from './reportroot.entity';
import { ReportRootModel } from './reportroot.model';
import { ReportRootCollection } from './reportroot.collection';
//#endregion

export const ReportRootConfig = {
  name: "reportRoot",
  base: "microsoft.graph.entity",
  model: ReportRootModel,
  collection: ReportRootCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<ReportRoot>;