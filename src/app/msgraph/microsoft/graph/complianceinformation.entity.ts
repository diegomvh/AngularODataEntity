import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { CertificationControl } from './certificationcontrol.entity';
import { CertificationControlModel } from './certificationcontrol.model';
import { CertificationControlCollection } from './certificationcontrol.collection';
//#endregion

export interface ComplianceInformation {
  //#region ODataApi Properties
  certificationControls?: CertificationControl[];
  certificationName?: string;
  //#endregion
}