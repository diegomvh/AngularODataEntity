import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { BaseItemVersion } from './baseitemversion.entity';
import { FieldValueSet } from './fieldvalueset.entity';
//#endregion

export interface ListItemVersion extends BaseItemVersion {
  //#region ODataApi Properties
  fields?: FieldValueSet;
  //#endregion
}