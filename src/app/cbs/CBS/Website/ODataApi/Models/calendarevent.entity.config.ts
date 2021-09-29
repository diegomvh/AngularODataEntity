//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CalendarEvent } from './calendarevent.entity';
import { CalendarEventModel } from './calendarevent.model';
import { CalendarEventCollection } from './calendarevent.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CalendarEventEntityConfig = {
  name: "CalendarEvent",
  model: CalendarEventModel,
  collection: CalendarEventCollection,
  keys: [{name: 'UniqueId'}],
  fields: {
    UniqueId: {type: 'Edm.String', nullable: false},
    Title: {type: 'Edm.String'},
    Url: {type: 'Edm.String'},
    MetaDescription: {type: 'Edm.String'},
    Image: {type: 'Edm.String'},
    ImageAlt: {type: 'Edm.String'},
    Description: {type: 'Edm.String'},
    PlannedPublicationTime: {type: 'Edm.DateTimeOffset', nullable: false},
    ReportingPeriod: {type: 'Edm.String'},
    Priority: {type: 'Edm.Int32', nullable: false},
    UnderEmbargo: {type: 'Edm.Boolean', nullable: false},
    PublishTimeUnknown: {type: 'Edm.Boolean', nullable: false},
    RegionalClassification: {type: 'Edm.String'},
    Themes: {type: 'Edm.String', collection: true},
    Language: {type: 'Edm.String'},
    Version: {type: 'Edm.Int32', nullable: false},
    SortOrder: {type: 'Edm.Int32', nullable: false},
    ItemNameLowerCase: {type: 'Edm.String'},
    Updated: {type: 'Edm.DateTimeOffset', nullable: false},
    Created: {type: 'Edm.DateTimeOffset', nullable: false},
    Permalink: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<CalendarEvent>;
//#endregion