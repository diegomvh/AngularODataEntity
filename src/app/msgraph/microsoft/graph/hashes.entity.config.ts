import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Hashes } from './hashes.entity';
import { HashesModel } from './hashes.model';
import { HashesCollection } from './hashes.collection';
//#endregion

export const HashesConfig = {
  name: "hashes",
  model: HashesModel,
  collection: HashesCollection,
  annotations: [],
  fields: {
    crc32Hash: {type: 'Edm.String'},
    quickXorHash: {type: 'Edm.String'},
    sha1Hash: {type: 'Edm.String'},
    sha256Hash: {type: 'Edm.String'}
  }
} as EntityConfig<Hashes>;