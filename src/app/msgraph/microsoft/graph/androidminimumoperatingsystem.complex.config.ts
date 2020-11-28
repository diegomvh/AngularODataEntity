import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.complex';
import { AndroidMinimumOperatingSystemModel } from './androidminimumoperatingsystem.model';
import { AndroidMinimumOperatingSystemCollection } from './androidminimumoperatingsystem.collection';
//#endregion

export const AndroidMinimumOperatingSystemConfig = {
  name: "androidMinimumOperatingSystem",
  model: AndroidMinimumOperatingSystemModel,
  collection: AndroidMinimumOperatingSystemCollection,
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
} as StructuredTypeConfig<AndroidMinimumOperatingSystem>;