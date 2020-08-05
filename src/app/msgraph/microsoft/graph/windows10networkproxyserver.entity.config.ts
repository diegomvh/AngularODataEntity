import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Windows10NetworkProxyServer } from './windows10networkproxyserver.entity';
//#endregion

export const Windows10NetworkProxyServerConfig = {
  name: "windows10NetworkProxyServer",
  annotations: [],
  fields: {
    address: {type: 'Edm.String', nullable: false},
    exceptions: {type: 'Edm.String', collection: true},
    useForLocalAddresses: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<Windows10NetworkProxyServer>;