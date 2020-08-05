import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.entity';
//#endregion

export const AndroidMinimumOperatingSystemConfig = {
  name: "AndroidMinimumOperatingSystem",
  annotations: [],
  fields: {
    v4_0: {type: 'Edm.Boolean', nullable: false},
    v4_0_3: {type: 'Edm.Boolean', nullable: false},
    v4_1: {type: 'Edm.Boolean', nullable: false},
    v4_2: {type: 'Edm.Boolean', nullable: false},
    v4_3: {type: 'Edm.Boolean', nullable: false},
    v4_4: {type: 'Edm.Boolean', nullable: false},
    v5_0: {type: 'Edm.Boolean', nullable: false},
    v5_1: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<AndroidMinimumOperatingSystem>;