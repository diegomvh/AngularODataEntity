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
    regionID: {name: 'RegionID', type: 'Edm.Int32', key: true, ref: 'regionID', nullable: false},
    regionDescription: {name: 'RegionDescription', type: 'Edm.String', nullable: false, maxLength: 50},
    territories: {name: 'Territories', type: 'NorthwindModel.Territory', collection: true, navigation: true}
  }
} as EntityConfig<Region>;