import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProfilePhoto } from './profilephoto.entity';
import { ProfilePhotoModel } from './profilephoto.model';
import { ProfilePhotoCollection } from './profilephoto.collection';
//#endregion

export const ProfilePhotoConfig = {
  name: "profilePhoto",
  base: "microsoft.graph.entity",
  model: ProfilePhotoModel,
  collection: ProfilePhotoCollection,
  annotations: [],
  fields: {
    height: {type: 'Edm.Int32'},
    width: {type: 'Edm.Int32'}
  }
} as EntityConfig<ProfilePhoto>;