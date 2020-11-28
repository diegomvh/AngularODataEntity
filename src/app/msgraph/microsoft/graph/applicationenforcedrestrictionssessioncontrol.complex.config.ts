import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ApplicationEnforcedRestrictionsSessionControl } from './applicationenforcedrestrictionssessioncontrol.complex';
import { ApplicationEnforcedRestrictionsSessionControlModel } from './applicationenforcedrestrictionssessioncontrol.model';
import { ApplicationEnforcedRestrictionsSessionControlCollection } from './applicationenforcedrestrictionssessioncontrol.collection';
//#endregion

export const ApplicationEnforcedRestrictionsSessionControlConfig = {
  name: "applicationEnforcedRestrictionsSessionControl",
  base: "microsoft.graph.conditionalAccessSessionControl",
  model: ApplicationEnforcedRestrictionsSessionControlModel,
  collection: ApplicationEnforcedRestrictionsSessionControlCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<ApplicationEnforcedRestrictionsSessionControl>;