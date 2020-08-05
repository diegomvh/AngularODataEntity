import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface Subscription extends Entity {
  //#region ODataApi Properties
  resource: string;
  changeType: string;
  clientState?: string;
  notificationUrl: string;
  expirationDateTime: Date;
  applicationId?: string;
  creatorId?: string;
  latestSupportedTlsVersion?: string;
  //#endregion
}