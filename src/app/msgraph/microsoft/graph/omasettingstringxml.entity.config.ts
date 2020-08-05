import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OmaSettingStringXml } from './omasettingstringxml.entity';
//#endregion

export const OmaSettingStringXmlConfig = {
  name: "omaSettingStringXml",
  base: "microsoft.graph.omaSetting",
  annotations: [],
  fields: {
    fileName: {type: 'Edm.String'},
    value: {type: 'Edm.Binary', nullable: false}
  }
} as EntityConfig<OmaSettingStringXml>;