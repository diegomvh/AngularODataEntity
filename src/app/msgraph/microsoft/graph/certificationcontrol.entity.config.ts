import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CertificationControl } from './certificationcontrol.entity';
//#endregion

export const CertificationControlConfig = {
  name: "CertificationControl",
  open: true,
  annotations: [],
  fields: {
    name: {type: 'Edm.String'},
    url: {type: 'Edm.String'}
  }
} as EntityConfig<CertificationControl>;