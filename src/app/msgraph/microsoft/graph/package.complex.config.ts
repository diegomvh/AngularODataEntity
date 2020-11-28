import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Package } from './package.complex';
import { PackageModel } from './package.model';
import { PackageCollection } from './package.collection';
//#endregion

export const PackageConfig = {
  name: "package",
  model: PackageModel,
  collection: PackageCollection,
  annotations: [],
  fields: {
    type: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Package>;