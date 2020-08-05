import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CloudAppSecuritySessionControl } from './cloudappsecuritysessioncontrol.entity';
//#endregion

export const CloudAppSecuritySessionControlConfig = {
  name: "CloudAppSecuritySessionControl",
  base: "microsoft.graph.conditionalAccessSessionControl",
  annotations: [],
  fields: {
    cloudAppSecurityType: {type: 'graph.cloudAppSecuritySessionControlType'}
  }
} as EntityConfig<CloudAppSecuritySessionControl>;