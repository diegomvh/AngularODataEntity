import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { KeyValue } from './keyvalue.entity';
//#endregion

export interface AddIn {
  //#region ODataApi Properties
  id?: string;
  type: string;
  properties: KeyValue[];
  //#endregion
}