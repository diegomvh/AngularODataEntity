import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleEntity } from './scheduleentity.entity';
//#endregion

export const ScheduleEntityConfig = {
  name: "ScheduleEntity",
  annotations: [],
  fields: {
    startDateTime: {type: 'Edm.DateTimeOffset'},
    endDateTime: {type: 'Edm.DateTimeOffset'},
    theme: {type: 'graph.scheduleEntityTheme', nullable: false}
  }
} as EntityConfig<ScheduleEntity>;