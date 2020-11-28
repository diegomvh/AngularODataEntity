import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Contract } from './contract.entity';
import { ContractModel } from './contract.model';
import { ContractCollection } from './contract.collection';
//#endregion

export const ContractConfig = {
  name: "contract",
  base: "microsoft.graph.directoryObject",
  open: true,
  model: ContractModel,
  collection: ContractCollection,
  annotations: [],
  fields: {
    contractType: {type: 'Edm.String'},
    customerId: {type: 'Edm.Guid'},
    defaultDomainName: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Contract>;