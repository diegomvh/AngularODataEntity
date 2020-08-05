import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosManagedAppRegistration } from './iosmanagedappregistration.entity';
//#endregion

export const IosManagedAppRegistrationConfig = {
  name: "IosManagedAppRegistration",
  base: "microsoft.graph.managedAppRegistration",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<IosManagedAppRegistration>;