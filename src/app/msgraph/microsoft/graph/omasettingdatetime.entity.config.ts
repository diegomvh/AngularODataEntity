import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OmaSettingDateTime } from './omasettingdatetime.entity';
import { OmaSettingDateTimeModel } from './omasettingdatetime.model';
import { OmaSettingDateTimeCollection } from './omasettingdatetime.collection';
//#endregion

export const OmaSettingDateTimeConfig = {
  name: "omaSettingDateTime",
  base: "microsoft.graph.omaSetting",
  model: OmaSettingDateTimeModel,
  collection: OmaSettingDateTimeCollection,
  annotations: [],
  fields: {
    value: {type: 'Edm.DateTimeOffset', nullable: false}
  }
} as EntityConfig<OmaSettingDateTime>;