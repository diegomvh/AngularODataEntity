import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Region } from './region.entity';
import { RegionModel } from './region.model';
import { RegionCollection } from './region.collection';
//#endregion

export const RegionConfig = {
  name: "Region",
  model: RegionModel,
  collection: RegionCollection,
  annotations: [],
  fields: {
    RegionID: {type: 'Edm.Int32', key: true, ref: 'RegionID', nullable: false},
    RegionDescription: {type: 'Edm.String', nullable: false, maxLength: 50},
    Territories: {type: 'NorthwindModel.Territory', collection: true, navigation: true}
  }
} as EntityConfig<Region>;