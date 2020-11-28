import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { OutlookCategory } from './outlookcategory.entity';
import { EntityModel } from './entity.model';
import { OutlookCategoryModel } from './outlookcategory.model';
import { EntityCollection } from './entity.collection';
import { OutlookCategoryCollection } from './outlookcategory.collection';
//#endregion

export interface OutlookUser extends Entity {
  //#region ODataApi Properties
  masterCategories?: OutlookCategory[];
  //#endregion
}