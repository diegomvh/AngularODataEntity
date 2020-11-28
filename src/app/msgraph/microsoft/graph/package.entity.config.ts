import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Package } from './package.entity';
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
} as EntityConfig<Package>;