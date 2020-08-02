import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Photo } from './photo.entity';
import { PlanItem } from './planitem.entity';
//#endregion

export interface Trip {
  //#region ODataApi Properties
  tripId: number;
  shareId?: string;
  description?: string;
  name: string;
  budget: number;
  startsAt: Date;
  endsAt: Date;
  tags: string[];
  photos?: Photo[];
  planItems?: PlanItem[];
  //#endregion
}