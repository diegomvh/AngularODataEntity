import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Report } from './report.entity';
import { ReportModel } from './report.model';
import { ReportCollection } from './report.collection';
//#endregion

export const ReportConfig = {
  name: "report",
  model: ReportModel,
  collection: ReportCollection,
  annotations: [],
  fields: {
    content: {type: 'Edm.Stream'}
  }
} as EntityConfig<Report>;