﻿//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Advertisement } from './advertisement.entity';
import { AdvertisementModel } from './advertisement.model';
import { AdvertisementCollection } from './advertisement.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const AdvertisementEntityConfig = {
  name: "Advertisement",
  model: AdvertisementModel,
  collection: AdvertisementCollection,
  keys: [{name: 'ID'}],
  fields: {
    ID: {type: 'Edm.Guid', nullable: false},
    Name: {type: 'Edm.String'},
    AirDate: {type: 'Edm.DateTime', nullable: false}
  }
} as StructuredTypeConfig<Advertisement>;
//#endregion