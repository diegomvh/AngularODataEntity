import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Package } from './package.entity';
//#endregion

export const PackageConfig = {
  name: "Package",
  annotations: [],
  fields: {
    type: {type: 'Edm.String'}
  }
} as EntityConfig<Package>;