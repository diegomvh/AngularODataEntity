import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { KeyValue } from './keyvalue.entity';
import { KeyValueModel } from './keyvalue.model';
import { KeyValueCollection } from './keyvalue.collection';
//#endregion

export interface AddIn {
  //#region ODataApi Properties
  id?: string;
  properties: KeyValue[];
  type: string;
  //#endregion
}