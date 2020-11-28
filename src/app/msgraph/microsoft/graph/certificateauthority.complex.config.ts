import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CertificateAuthority } from './certificateauthority.complex';
import { CertificateAuthorityModel } from './certificateauthority.model';
import { CertificateAuthorityCollection } from './certificateauthority.collection';
//#endregion

export const CertificateAuthorityConfig = {
  name: "certificateAuthority",
  model: CertificateAuthorityModel,
  collection: CertificateAuthorityCollection,
  annotations: [],
  fields: {
    certificate: {type: 'Edm.Binary', nullable: false},
    certificateRevocationListUrl: {type: 'Edm.String'},
    deltaCertificateRevocationListUrl: {type: 'Edm.String'},
    isRootAuthority: {type: 'Edm.Boolean', nullable: false},
    issuer: {type: 'Edm.String', nullable: false},
    issuerSki: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<CertificateAuthority>;