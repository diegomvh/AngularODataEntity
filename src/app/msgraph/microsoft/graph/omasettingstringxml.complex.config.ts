import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OmaSettingStringXml } from './omasettingstringxml.complex';
import { OmaSettingStringXmlModel } from './omasettingstringxml.model';
import { OmaSettingStringXmlCollection } from './omasettingstringxml.collection';
//#endregion

export const OmaSettingStringXmlConfig = {
  name: "omaSettingStringXml",
  base: "microsoft.graph.omaSetting",
  model: OmaSettingStringXmlModel,
  collection: OmaSettingStringXmlCollection,
  annotations: [],
  fields: {
    fileName: {type: 'Edm.String'},
    value: {type: 'Edm.Binary', nullable: false}
  }
} as StructuredTypeConfig<OmaSettingStringXml>;