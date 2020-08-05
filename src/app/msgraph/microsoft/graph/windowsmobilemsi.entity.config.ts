import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsMobileMSI } from './windowsmobilemsi.entity';
//#endregion

export const WindowsMobileMSIConfig = {
  name: "windowsMobileMSI",
  base: "microsoft.graph.mobileLobApp",
  annotations: [],
  fields: {
    commandLine: {type: 'Edm.String'},
    productCode: {type: 'Edm.String'},
    productVersion: {type: 'Edm.String'},
    ignoreVersionDetection: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<WindowsMobileMSI>;