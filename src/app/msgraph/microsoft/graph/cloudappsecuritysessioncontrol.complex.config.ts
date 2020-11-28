import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CloudAppSecuritySessionControl } from './cloudappsecuritysessioncontrol.complex';
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
} as StructuredTypeConfig<CloudAppSecuritySessionControl>;