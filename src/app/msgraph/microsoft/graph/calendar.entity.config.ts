import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Calendar } from './calendar.entity';
import { CalendarModel } from './calendar.model';
import { CalendarCollection } from './calendar.collection';
//#endregion

export const CalendarConfig = {
  name: "calendar",
  base: "microsoft.graph.entity",
  model: CalendarModel,
  collection: CalendarCollection,
  annotations: [],
  fields: {
    allowedOnlineMeetingProviders: {type: 'graph.onlineMeetingProviderType', collection: true},
    canEdit: {type: 'Edm.Boolean'},
    canShare: {type: 'Edm.Boolean'},
    canViewPrivateItems: {type: 'Edm.Boolean'},
    changeKey: {type: 'Edm.String'},
    color: {type: 'graph.calendarColor'},
    defaultOnlineMeetingProvider: {type: 'graph.onlineMeetingProviderType'},
    isRemovable: {type: 'Edm.Boolean'},
    isTallyingResponses: {type: 'Edm.Boolean'},
    name: {type: 'Edm.String'},
    owner: {type: 'graph.emailAddress'},
    calendarPermissions: {type: 'graph.calendarPermission', collection: true, navigation: true},
    calendarView: {type: 'graph.event', collection: true, navigation: true},
    events: {type: 'graph.event', collection: true, navigation: true},
    multiValueExtendedProperties: {type: 'graph.multiValueLegacyExtendedProperty', collection: true, navigation: true},
    singleValueExtendedProperties: {type: 'graph.singleValueLegacyExtendedProperty', collection: true, navigation: true}
  }
} as EntityConfig<Calendar>;