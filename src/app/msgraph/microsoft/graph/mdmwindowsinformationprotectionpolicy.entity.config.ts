import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MdmWindowsInformationProtectionPolicy } from './mdmwindowsinformationprotectionpolicy.entity';
//#endregion

export const MdmWindowsInformationProtectionPolicyConfig = {
  name: "mdmWindowsInformationProtectionPolicy",
  base: "microsoft.graph.windowsInformationProtection",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<MdmWindowsInformationProtectionPolicy>;