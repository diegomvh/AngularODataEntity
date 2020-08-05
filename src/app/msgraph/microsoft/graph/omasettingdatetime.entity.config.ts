import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OmaSettingDateTime } from './omasettingdatetime.entity';
//#endregion

export const OmaSettingDateTimeConfig = {
  name: "omaSettingDateTime",
  base: "microsoft.graph.omaSetting",
  annotations: [],
  fields: {
    value: {type: 'Edm.DateTimeOffset', nullable: false}
  }
} as EntityConfig<OmaSettingDateTime>;