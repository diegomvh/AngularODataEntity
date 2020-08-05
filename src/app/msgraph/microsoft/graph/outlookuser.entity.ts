import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { OutlookCategory } from './outlookcategory.entity';
//#endregion

export interface OutlookUser extends Entity {
  //#region ODataApi Properties
  masterCategories?: OutlookCategory[];
  //#endregion
}