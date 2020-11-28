import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ApplicationEnforcedRestrictionsSessionControl } from './applicationenforcedrestrictionssessioncontrol.entity';
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
} as EntityConfig<ApplicationEnforcedRestrictionsSessionControl>;