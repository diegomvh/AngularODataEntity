import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CloudAppSecuritySessionControl } from './cloudappsecuritysessioncontrol.entity';
import { CloudAppSecuritySessionControlModel } from './cloudappsecuritysessioncontrol.model';
import { CloudAppSecuritySessionControlCollection } from './cloudappsecuritysessioncontrol.collection';
//#endregion

export const CloudAppSecuritySessionControlConfig = {
  name: "cloudAppSecuritySessionControl",
  base: "microsoft.graph.conditionalAccessSessionControl",
  model: CloudAppSecuritySessionControlModel,
  collection: CloudAppSecuritySessionControlCollection,
  annotations: [],
  fields: {
    cloudAppSecurityType: {type: 'graph.cloudAppSecuritySessionControlType'}
  }
} as EntityConfig<CloudAppSecuritySessionControl>;