import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Advertisement } from './advertisement.entity';
import { AdvertisementModel } from './advertisement.model';
import { AdvertisementCollection } from './advertisement.collection';
//#endregion

export const AdvertisementConfig = {
  name: "Advertisement",
  model: AdvertisementModel,
  collection: AdvertisementCollection,
  annotations: [],
  fields: {
    ID: {type: 'Edm.Guid', key: true, ref: 'ID', nullable: false},
    Name: {type: 'Edm.String'},
    AirDate: {type: 'Edm.DateTime', nullable: false},
    FeaturedProduct: {type: 'ODataDemo.FeaturedProduct', navigation: true}
  }
} as StructuredTypeConfig<Advertisement>;