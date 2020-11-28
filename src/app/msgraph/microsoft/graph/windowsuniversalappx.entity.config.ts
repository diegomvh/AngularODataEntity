import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsUniversalAppX } from './windowsuniversalappx.entity';
import { WindowsUniversalAppXModel } from './windowsuniversalappx.model';
import { WindowsUniversalAppXCollection } from './windowsuniversalappx.collection';
//#endregion

export const WindowsUniversalAppXConfig = {
  name: "windowsUniversalAppX",
  base: "microsoft.graph.mobileLobApp",
  model: WindowsUniversalAppXModel,
  collection: WindowsUniversalAppXCollection,
  annotations: [],
  fields: {
    applicableArchitectures: {type: 'graph.windowsArchitecture', nullable: false},
    applicableDeviceTypes: {type: 'graph.windowsDeviceType', nullable: false},
    identityName: {type: 'Edm.String'},
    identityPublisherHash: {type: 'Edm.String', nullable: false},
    identityResourceIdentifier: {type: 'Edm.String'},
    identityVersion: {type: 'Edm.String'},
    isBundle: {type: 'Edm.Boolean', nullable: false},
    minimumSupportedOperatingSystem: {type: 'graph.windowsMinimumOperatingSystem', nullable: false}
  }
} as EntityConfig<WindowsUniversalAppX>;