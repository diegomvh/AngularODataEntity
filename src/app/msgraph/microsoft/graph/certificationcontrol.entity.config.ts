import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CertificationControl } from './certificationcontrol.entity';
import { CertificationControlModel } from './certificationcontrol.model';
import { CertificationControlCollection } from './certificationcontrol.collection';
//#endregion

export const CertificationControlConfig = {
  name: "certificationControl",
  open: true,
  model: CertificationControlModel,
  collection: CertificationControlCollection,
  annotations: [],
  fields: {
    name: {type: 'Edm.String'},
    url: {type: 'Edm.String'}
  }
} as EntityConfig<CertificationControl>;