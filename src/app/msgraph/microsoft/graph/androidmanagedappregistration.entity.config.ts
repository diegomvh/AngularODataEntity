import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidManagedAppRegistration } from './androidmanagedappregistration.entity';
//#endregion

export const AndroidManagedAppRegistrationConfig = {
  name: "androidManagedAppRegistration",
  base: "microsoft.graph.managedAppRegistration",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<AndroidManagedAppRegistration>;