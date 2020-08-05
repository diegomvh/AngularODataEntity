import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { CertificateAuthority } from './certificateauthority.entity';
//#endregion

export interface CertificateBasedAuthConfiguration extends Entity {
  //#region ODataApi Properties
  certificateAuthorities: CertificateAuthority[];
  //#endregion
}