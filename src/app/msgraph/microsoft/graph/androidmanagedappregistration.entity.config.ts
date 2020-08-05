import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidManagedAppRegistration } from './androidmanagedappregistration.entity';
//#endregion

export const AndroidManagedAppRegistrationConfig = {
  name: "AndroidManagedAppRegistration",
  base: "microsoft.graph.managedAppRegistration",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<AndroidManagedAppRegistration>;