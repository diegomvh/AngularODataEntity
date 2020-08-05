import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Report } from './report.entity';
//#endregion

export const ReportConfig = {
  name: "Report",
  annotations: [],
  fields: {
    content: {type: 'Edm.Stream'}
  }
} as EntityConfig<Report>;