import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsUpdateInstallScheduleType } from './windowsupdateinstallscheduletype.complex';
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
} as StructuredTypeConfig<WindowsUpdateInstallScheduleType>;