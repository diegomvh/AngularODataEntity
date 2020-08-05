import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SignInLocation } from './signinlocation.entity';
//#endregion

export const SignInLocationConfig = {
  name: "signInLocation",
  annotations: [],
  fields: {
    city: {type: 'Edm.String'},
    state: {type: 'Edm.String'},
    countryOrRegion: {type: 'Edm.String'},
    geoCoordinates: {type: 'graph.geoCoordinates'}
  }
} as EntityConfig<SignInLocation>;