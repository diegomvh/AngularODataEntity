import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Status } from './status.enum';
import { Json } from './json.entity';
import { VisualInfo } from './visualinfo.entity';
import { ActivityHistoryItem } from './activityhistoryitem.entity';
//#endregion

export interface UserActivity extends Entity {
  //#region ODataApi Properties
  visualElements: VisualInfo;
  activitySourceHost: string;
  activationUrl: string;
  appActivityId: string;
  appDisplayName?: string;
  contentUrl?: string;
  createdDateTime?: Date;
  expirationDateTime?: Date;
  fallbackUrl?: string;
  lastModifiedDateTime?: Date;
  userTimezone?: string;
  contentInfo?: Json;
  status?: Status;
  historyItems?: ActivityHistoryItem[];
  //#endregion
}