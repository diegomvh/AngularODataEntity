import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ChangeType } from './changetype.enum';
import { ResourceData } from './resourcedata.entity';
import { ResourceDataModel } from './resourcedata.model';
import { ResourceDataCollection } from './resourcedata.collection';
//#endregion

export interface ChangeNotification {
  //#region ODataApi Properties
  changeType: ChangeType;
  clientState?: string;
  id?: string;
  resource: string;
  resourceData?: ResourceData;
  subscriptionExpirationDateTime: Date;
  subscriptionId: string;
  tenantId: string;
  //#endregion
}