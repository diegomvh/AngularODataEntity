import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SiuPrincipal } from './siuprincipal.entity';
import { SiuPrincipalModel } from './siuprincipal.model';
import { SiuPrincipalCollection } from './siuprincipal.collection';
//#endregion

export const SiuPrincipalConfig = {
  name: "SiuPrincipal",
  open: true,
  model: SiuPrincipalModel,
  collection: SiuPrincipalCollection,
  annotations: [],
  fields: {
    roles: {type: 'Edm.String', collection: true},
    oficinaIds: {type: 'Edm.Int32', nullable: false, collection: true}
  }
} as EntityConfig<SiuPrincipal>;