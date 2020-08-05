import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DriveItem } from './driveitem.entity';
import { ChatMessage } from './chatmessage.entity';
import { TeamsTab } from './teamstab.entity';
//#endregion

export interface Channel extends Entity {
  //#region ODataApi Properties
  displayName: string;
  description?: string;
  email?: string;
  webUrl?: string;
  messages?: ChatMessage[];
  tabs?: TeamsTab[];
  filesFolder?: DriveItem;
  //#endregion
}