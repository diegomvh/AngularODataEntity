import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CloudAppSecuritySessionControl } from './cloudappsecuritysessioncontrol.entity';
//#endregion

export const CloudAppSecuritySessionControlConfig = {
  name: "cloudAppSecuritySessionControl",
  base: "microsoft.graph.conditionalAccessSessionControl",
  annotations: [],
  fields: {
    cloudAppSecurityType: {type: 'graph.cloudAppSecuritySessionControlType'}
  }
} as EntityConfig<CloudAppSecuritySessionControl>;