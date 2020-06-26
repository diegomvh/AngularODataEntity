import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Region } from './region.entity';
//#endregion

export const RegionConfig = {
  name: "Region",
  annotations: [],
  fields: {
    RegionID: {type: 'Number', key: true, ref: 'RegionID', nullable: false},
    RegionDescription: {type: 'String', nullable: false, maxLength: 50},
    Territories: {type: 'NorthwindModel.Territory', collection: true, navigation: true}
  }
} as EntityConfig<Region>;