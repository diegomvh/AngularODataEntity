import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Photo } from './photo.entity';
import { PlanItem } from './planitem.entity';
import { PhotoModel } from './photo.model';
import { PlanItemModel } from './planitem.model';
import { PhotoCollection } from './photo.collection';
import { PlanItemCollection } from './planitem.collection';
//#endregion

export interface Trip {
  //#region ODataApi Properties
  TripId: number;
  ShareId?: string;
  Description?: string;
  Name: string;
  Budget: number;
  StartsAt: Date;
  EndsAt: Date;
  Tags: string[];
  Photos?: Photo[];
  PlanItems?: PlanItem[];
  //#endregion
}