import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { CertificationControl } from './certificationcontrol.entity';
//#endregion

export interface ComplianceInformation {
  //#region ODataApi Properties
  certificationControls?: CertificationControl[];
  certificationName?: string;
  //#endregion
}