import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosManagedAppRegistration } from './iosmanagedappregistration.entity';
import { IosManagedAppRegistrationModel } from './iosmanagedappregistration.model';
import { IosManagedAppRegistrationCollection } from './iosmanagedappregistration.collection';
//#endregion

export const IosManagedAppRegistrationConfig = {
  name: "iosManagedAppRegistration",
  base: "microsoft.graph.managedAppRegistration",
  model: IosManagedAppRegistrationModel,
  collection: IosManagedAppRegistrationCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<IosManagedAppRegistration>;