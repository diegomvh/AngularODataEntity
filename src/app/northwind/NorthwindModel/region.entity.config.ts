import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Region } from './region.entity';
//#endregion

export const RegionConfig = {
  name: "Region",
  annotations: [],
  fields: {
    RegionID: {type: 'Edm.Int32', key: true, ref: 'RegionID', nullable: false},
    RegionDescription: {type: 'Edm.String', nullable: false, maxLength: 50},
    Territories: {type: 'NorthwindModel.Territory', collection: true, navigation: true}
  }
} as EntityConfig<Region>;