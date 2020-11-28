import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { BaseItemVersion } from './baseitemversion.entity';
import { FieldValueSet } from './fieldvalueset.entity';
import { BaseItemVersionModel } from './baseitemversion.model';
import { FieldValueSetModel } from './fieldvalueset.model';
import { BaseItemVersionCollection } from './baseitemversion.collection';
import { FieldValueSetCollection } from './fieldvalueset.collection';
//#endregion

export interface ListItemVersion extends BaseItemVersion {
  //#region ODataApi Properties
  fields?: FieldValueSet;
  //#endregion
}