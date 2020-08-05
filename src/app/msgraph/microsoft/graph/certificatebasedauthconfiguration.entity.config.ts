import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CertificateBasedAuthConfiguration } from './certificatebasedauthconfiguration.entity';
//#endregion

export const CertificateBasedAuthConfigurationConfig = {
  name: "CertificateBasedAuthConfiguration",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    certificateAuthorities: {type: 'graph.certificateAuthority', nullable: false, collection: true}
  }
} as EntityConfig<CertificateBasedAuthConfiguration>;