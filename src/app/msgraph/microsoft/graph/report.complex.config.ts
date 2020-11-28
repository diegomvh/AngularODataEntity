import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Report } from './report.complex';
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
} as StructuredTypeConfig<Report>;