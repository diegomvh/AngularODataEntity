import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ComplianceInformation } from './complianceinformation.entity';
import { ComplianceInformationModel } from './complianceinformation.model';
import { ComplianceInformationCollection } from './complianceinformation.collection';
//#endregion

export const ComplianceInformationConfig = {
  name: "complianceInformation",
  open: true,
  model: ComplianceInformationModel,
  collection: ComplianceInformationCollection,
  annotations: [],
  fields: {
    certificationControls: {type: 'graph.certificationControl', collection: true},
    certificationName: {type: 'Edm.String'}
  }
} as EntityConfig<ComplianceInformation>;