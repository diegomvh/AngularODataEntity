import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionProxiedDomainCollection } from './windowsinformationprotectionproxieddomaincollection.complex';
import { WindowsInformationProtectionProxiedDomainCollectionModel } from './windowsinformationprotectionproxieddomaincollection.model';
import { WindowsInformationProtectionProxiedDomainCollectionCollection } from './windowsinformationprotectionproxieddomaincollection.collection';
//#endregion

export const WindowsInformationProtectionProxiedDomainCollectionConfig = {
  name: "windowsInformationProtectionProxiedDomainCollection",
  model: WindowsInformationProtectionProxiedDomainCollectionModel,
  collection: WindowsInformationProtectionProxiedDomainCollectionCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    proxiedDomains: {type: 'graph.proxiedDomain', nullable: false, collection: true}
  }
} as StructuredTypeConfig<WindowsInformationProtectionProxiedDomainCollection>;