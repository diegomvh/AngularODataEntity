import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.complex';
import { IosMinimumOperatingSystemModel } from './iosminimumoperatingsystem.model';
import { IosMinimumOperatingSystemCollection } from './iosminimumoperatingsystem.collection';
//#endregion

export const IosMinimumOperatingSystemConfig = {
  name: "iosMinimumOperatingSystem",
  model: IosMinimumOperatingSystemModel,
  collection: IosMinimumOperatingSystemCollection,
  annotations: [],
  fields: {
    v10_0: {type: 'Edm.Boolean', nullable: false},
    v11_0: {type: 'Edm.Boolean', nullable: false},
    v12_0: {type: 'Edm.Boolean', nullable: false},
    v13_0: {type: 'Edm.Boolean', nullable: false},
    v8_0: {type: 'Edm.Boolean', nullable: false},
    v9_0: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<IosMinimumOperatingSystem>;