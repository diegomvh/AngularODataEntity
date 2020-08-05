import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ChangeType } from './changetype.enum';
import { ResourceData } from './resourcedata.entity';
//#endregion

export interface ChangeNotification {
  //#region ODataApi Properties
  id?: string;
  subscriptionId: string;
  subscriptionExpirationDateTime: Date;
  clientState?: string;
  changeType: ChangeType;
  resource: string;
  tenantId: string;
  resourceData?: ResourceData;
  //#endregion
}