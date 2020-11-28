import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { CertificateAuthority } from './certificateauthority.entity';
import { CertificateAuthorityModel } from './certificateauthority.model';
import { EntityModel } from './entity.model';
import { CertificateAuthorityCollection } from './certificateauthority.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface CertificateBasedAuthConfiguration extends Entity {
  //#region ODataApi Properties
  certificateAuthorities: CertificateAuthority[];
  //#endregion
}