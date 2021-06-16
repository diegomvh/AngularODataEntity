//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { PlanItem } from './planitem.entity';
import { EventLocation } from './eventlocation.complex';
import { EventLocationModel } from './eventlocation.model';
import { PlanItemModel } from './planitem.model';
import { EventLocationCollection } from './eventlocation.collection';
import { PlanItemCollection } from './planitem.collection';
//#endregion

export interface Event extends PlanItem {
  //#region ODataApi Properties
  Description?: string;
  OccursAt: EventLocation;
  //#endregion
}