import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidManagedAppRegistration } from './androidmanagedappregistration.entity';
import { AndroidManagedAppRegistrationModel } from './androidmanagedappregistration.model';
import { AndroidManagedAppRegistrationCollection } from './androidmanagedappregistration.collection';
//#endregion

export const AndroidManagedAppRegistrationConfig = {
  name: "androidManagedAppRegistration",
  base: "microsoft.graph.managedAppRegistration",
  model: AndroidManagedAppRegistrationModel,
  collection: AndroidManagedAppRegistrationCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<AndroidManagedAppRegistration>;