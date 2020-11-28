import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsMobileMSI } from './windowsmobilemsi.entity';
import { WindowsMobileMSIModel } from './windowsmobilemsi.model';
import { WindowsMobileMSICollection } from './windowsmobilemsi.collection';
//#endregion

export const WindowsMobileMSIConfig = {
  name: "windowsMobileMSI",
  base: "microsoft.graph.mobileLobApp",
  model: WindowsMobileMSIModel,
  collection: WindowsMobileMSICollection,
  annotations: [],
  fields: {
    commandLine: {type: 'Edm.String'},
    ignoreVersionDetection: {type: 'Edm.Boolean', nullable: false},
    productCode: {type: 'Edm.String'},
    productVersion: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WindowsMobileMSI>;