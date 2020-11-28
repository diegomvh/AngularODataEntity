import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface Subscription extends Entity {
  //#region ODataApi Properties
  applicationId?: string;
  changeType: string;
  clientState?: string;
  creatorId?: string;
  expirationDateTime: Date;
  latestSupportedTlsVersion?: string;
  notificationUrl: string;
  resource: string;
  //#endregion
}