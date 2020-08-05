import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ApplicationEnforcedRestrictionsSessionControl } from './applicationenforcedrestrictionssessioncontrol.entity';
//#endregion

export const ApplicationEnforcedRestrictionsSessionControlConfig = {
  name: "applicationEnforcedRestrictionsSessionControl",
  base: "microsoft.graph.conditionalAccessSessionControl",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<ApplicationEnforcedRestrictionsSessionControl>;