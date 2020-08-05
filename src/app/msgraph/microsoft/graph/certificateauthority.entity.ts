import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface CertificateAuthority {
  //#region ODataApi Properties
  isRootAuthority: boolean;
  certificateRevocationListUrl?: string;
  deltaCertificateRevocationListUrl?: string;
  certificate: ArrayBuffer;
  issuer: string;
  issuerSki: string;
  //#endregion
}