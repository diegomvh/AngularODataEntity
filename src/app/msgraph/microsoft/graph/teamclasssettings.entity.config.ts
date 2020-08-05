﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamClassSettings } from './teamclasssettings.entity';
//#endregion

export const TeamClassSettingsConfig = {
  name: "TeamClassSettings",
  annotations: [],
  fields: {
    notifyGuardiansAboutAssignments: {type: 'Edm.Boolean'}
  }
} as EntityConfig<TeamClassSettings>;