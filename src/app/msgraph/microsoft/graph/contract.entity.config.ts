import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Contract } from './contract.entity';
//#endregion

export const ContractConfig = {
  name: "contract",
  base: "microsoft.graph.directoryObject",
  open: true,
  annotations: [],
  fields: {
    contractType: {type: 'Edm.String'},
    customerId: {type: 'Edm.Guid'},
    defaultDomainName: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'}
  }
} as EntityConfig<Contract>;