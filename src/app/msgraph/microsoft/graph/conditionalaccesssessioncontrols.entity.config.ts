import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessSessionControls } from './conditionalaccesssessioncontrols.entity';
//#endregion

export const ConditionalAccessSessionControlsConfig = {
  name: "ConditionalAccessSessionControls",
  annotations: [],
  fields: {
    applicationEnforcedRestrictions: {type: 'graph.applicationEnforcedRestrictionsSessionControl'},
    cloudAppSecurity: {type: 'graph.cloudAppSecuritySessionControl'},
    signInFrequency: {type: 'graph.signInFrequencySessionControl'},
    persistentBrowser: {type: 'graph.persistentBrowserSessionControl'}
  }
} as EntityConfig<ConditionalAccessSessionControls>;