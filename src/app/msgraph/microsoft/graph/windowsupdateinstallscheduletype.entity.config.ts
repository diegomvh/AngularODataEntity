import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsUpdateInstallScheduleType } from './windowsupdateinstallscheduletype.entity';
import { WindowsUpdateInstallScheduleTypeModel } from './windowsupdateinstallscheduletype.model';
import { WindowsUpdateInstallScheduleTypeCollection } from './windowsupdateinstallscheduletype.collection';
//#endregion

export const WindowsUpdateInstallScheduleTypeConfig = {
  name: "windowsUpdateInstallScheduleType",
  model: WindowsUpdateInstallScheduleTypeModel,
  collection: WindowsUpdateInstallScheduleTypeCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<WindowsUpdateInstallScheduleType>;