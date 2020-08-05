import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProfilePhoto } from './profilephoto.entity';
//#endregion

export const ProfilePhotoConfig = {
  name: "profilePhoto",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    height: {type: 'Edm.Int32'},
    width: {type: 'Edm.Int32'}
  }
} as EntityConfig<ProfilePhoto>;