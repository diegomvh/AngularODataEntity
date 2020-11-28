import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Windows10NetworkProxyServer } from './windows10networkproxyserver.entity';
import { Windows10NetworkProxyServerModel } from './windows10networkproxyserver.model';
import { Windows10NetworkProxyServerCollection } from './windows10networkproxyserver.collection';
//#endregion

export const Windows10NetworkProxyServerConfig = {
  name: "windows10NetworkProxyServer",
  model: Windows10NetworkProxyServerModel,
  collection: Windows10NetworkProxyServerCollection,
  annotations: [],
  fields: {
    address: {type: 'Edm.String', nullable: false},
    exceptions: {type: 'Edm.String', collection: true},
    useForLocalAddresses: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<Windows10NetworkProxyServer>;