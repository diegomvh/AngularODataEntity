﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AdministrativeUnit } from './administrativeunit.entity';
//#endregion

export const AdministrativeUnitConfig = {
  name: "AdministrativeUnit",
  base: "microsoft.graph.directoryObject",
  open: true,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<AdministrativeUnit>;