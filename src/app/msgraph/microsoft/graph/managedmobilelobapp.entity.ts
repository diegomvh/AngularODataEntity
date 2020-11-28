import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedApp } from './managedapp.entity';
import { MobileAppContent } from './mobileappcontent.entity';
import { ManagedAppModel } from './managedapp.model';
import { MobileAppContentModel } from './mobileappcontent.model';
import { ManagedAppCollection } from './managedapp.collection';
import { MobileAppContentCollection } from './mobileappcontent.collection';
//#endregion

export interface ManagedMobileLobApp extends ManagedApp {
  //#region ODataApi Properties
  committedContentVersion?: string;
  fileName?: string;
  size: number;
  contentVersions?: MobileAppContent[];
  //#endregion
}