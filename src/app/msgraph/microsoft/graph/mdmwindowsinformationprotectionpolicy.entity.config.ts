import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MdmWindowsInformationProtectionPolicy } from './mdmwindowsinformationprotectionpolicy.entity';
import { MdmWindowsInformationProtectionPolicyModel } from './mdmwindowsinformationprotectionpolicy.model';
import { MdmWindowsInformationProtectionPolicyCollection } from './mdmwindowsinformationprotectionpolicy.collection';
//#endregion

export const MdmWindowsInformationProtectionPolicyConfig = {
  name: "mdmWindowsInformationProtectionPolicy",
  base: "microsoft.graph.windowsInformationProtection",
  model: MdmWindowsInformationProtectionPolicyModel,
  collection: MdmWindowsInformationProtectionPolicyCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<MdmWindowsInformationProtectionPolicy>;