import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Hashes } from './hashes.entity';
//#endregion

export const HashesConfig = {
  name: "Hashes",
  annotations: [],
  fields: {
    crc32Hash: {type: 'Edm.String'},
    quickXorHash: {type: 'Edm.String'},
    sha1Hash: {type: 'Edm.String'},
    sha256Hash: {type: 'Edm.String'}
  }
} as EntityConfig<Hashes>;