import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SignInLocation } from './signinlocation.entity';
import { SignInLocationModel } from './signinlocation.model';
import { SignInLocationCollection } from './signinlocation.collection';
//#endregion

export const SignInLocationConfig = {
  name: "signInLocation",
  model: SignInLocationModel,
  collection: SignInLocationCollection,
  annotations: [],
  fields: {
    city: {type: 'Edm.String'},
    countryOrRegion: {type: 'Edm.String'},
    geoCoordinates: {type: 'graph.geoCoordinates'},
    state: {type: 'Edm.String'}
  }
} as EntityConfig<SignInLocation>;