import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CertificateBasedAuthConfiguration } from './certificatebasedauthconfiguration.entity';
import { CertificateBasedAuthConfigurationModel } from './certificatebasedauthconfiguration.model';
import { CertificateBasedAuthConfigurationCollection } from './certificatebasedauthconfiguration.collection';
//#endregion

export const CertificateBasedAuthConfigurationConfig = {
  name: "certificateBasedAuthConfiguration",
  base: "microsoft.graph.entity",
  model: CertificateBasedAuthConfigurationModel,
  collection: CertificateBasedAuthConfigurationCollection,
  annotations: [],
  fields: {
    certificateAuthorities: {type: 'graph.certificateAuthority', nullable: false, collection: true}
  }
} as StructuredTypeConfig<CertificateBasedAuthConfiguration>;