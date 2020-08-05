import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CertificateAuthority } from './certificateauthority.entity';
//#endregion

export const CertificateAuthorityConfig = {
  name: "certificateAuthority",
  annotations: [],
  fields: {
    isRootAuthority: {type: 'Edm.Boolean', nullable: false},
    certificateRevocationListUrl: {type: 'Edm.String'},
    deltaCertificateRevocationListUrl: {type: 'Edm.String'},
    certificate: {type: 'Edm.Binary', nullable: false},
    issuer: {type: 'Edm.String', nullable: false},
    issuerSki: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<CertificateAuthority>;