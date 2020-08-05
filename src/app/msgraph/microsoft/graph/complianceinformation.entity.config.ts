import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ComplianceInformation } from './complianceinformation.entity';
//#endregion

export const ComplianceInformationConfig = {
  name: "complianceInformation",
  open: true,
  annotations: [],
  fields: {
    certificationControls: {type: 'graph.certificationControl', collection: true},
    certificationName: {type: 'Edm.String'}
  }
} as EntityConfig<ComplianceInformation>;