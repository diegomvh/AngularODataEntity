import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface CertificateAuthority {
  //#region ODataApi Properties
  certificate: ArrayBuffer;
  certificateRevocationListUrl?: string;
  deltaCertificateRevocationListUrl?: string;
  isRootAuthority: boolean;
  issuer: string;
  issuerSki: string;
  //#endregion
}