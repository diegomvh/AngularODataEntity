import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Status } from './status.enum';
import { Json } from './json.complex';
import { VisualInfo } from './visualinfo.complex';
import { ActivityHistoryItem } from './activityhistoryitem.entity';
import { JsonModel } from './json.model';
import { VisualInfoModel } from './visualinfo.model';
import { EntityModel } from './entity.model';
import { ActivityHistoryItemModel } from './activityhistoryitem.model';
import { JsonCollection } from './json.collection';
import { VisualInfoCollection } from './visualinfo.collection';
import { EntityCollection } from './entity.collection';
import { ActivityHistoryItemCollection } from './activityhistoryitem.collection';
//#endregion

export interface UserActivity extends Entity {
  //#region ODataApi Properties
  activationUrl: string;
  activitySourceHost: string;
  appActivityId: string;
  appDisplayName?: string;
  contentInfo?: Json;
  contentUrl?: string;
  createdDateTime?: Date;
  expirationDateTime?: Date;
  fallbackUrl?: string;
  lastModifiedDateTime?: Date;
  status?: Status;
  userTimezone?: string;
  visualElements: VisualInfo;
  historyItems?: ActivityHistoryItem[];
  //#endregion
}