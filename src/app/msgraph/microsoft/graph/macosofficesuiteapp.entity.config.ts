import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MacOSOfficeSuiteApp } from './macosofficesuiteapp.entity';
import { MacOSOfficeSuiteAppModel } from './macosofficesuiteapp.model';
import { MacOSOfficeSuiteAppCollection } from './macosofficesuiteapp.collection';
//#endregion

export const MacOSOfficeSuiteAppConfig = {
  name: "macOSOfficeSuiteApp",
  base: "microsoft.graph.mobileApp",
  model: MacOSOfficeSuiteAppModel,
  collection: MacOSOfficeSuiteAppCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<MacOSOfficeSuiteApp>;