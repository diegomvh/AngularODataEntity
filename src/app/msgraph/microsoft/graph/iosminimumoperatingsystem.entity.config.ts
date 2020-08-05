import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.entity';
//#endregion

export const IosMinimumOperatingSystemConfig = {
  name: "iosMinimumOperatingSystem",
  annotations: [],
  fields: {
    v8_0: {type: 'Edm.Boolean', nullable: false},
    v9_0: {type: 'Edm.Boolean', nullable: false},
    v10_0: {type: 'Edm.Boolean', nullable: false},
    v11_0: {type: 'Edm.Boolean', nullable: false},
    v12_0: {type: 'Edm.Boolean', nullable: false},
    v13_0: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<IosMinimumOperatingSystem>;