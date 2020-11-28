import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AdministrativeUnit } from './administrativeunit.entity';
import { AdministrativeUnitModel } from './administrativeunit.model';
import { AdministrativeUnitCollection } from './administrativeunit.collection';
//#endregion

export const AdministrativeUnitConfig = {
  name: "administrativeUnit",
  base: "microsoft.graph.directoryObject",
  open: true,
  model: AdministrativeUnitModel,
  collection: AdministrativeUnitCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<AdministrativeUnit>;