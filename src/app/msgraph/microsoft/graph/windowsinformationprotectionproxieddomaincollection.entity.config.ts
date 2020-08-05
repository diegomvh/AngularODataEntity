import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionProxiedDomainCollection } from './windowsinformationprotectionproxieddomaincollection.entity';
//#endregion

export const WindowsInformationProtectionProxiedDomainCollectionConfig = {
  name: "windowsInformationProtectionProxiedDomainCollection",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    proxiedDomains: {type: 'graph.proxiedDomain', nullable: false, collection: true}
  }
} as EntityConfig<WindowsInformationProtectionProxiedDomainCollection>;