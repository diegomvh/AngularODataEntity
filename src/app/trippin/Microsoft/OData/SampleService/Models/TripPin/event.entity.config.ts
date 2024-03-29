﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Event } from './event.entity';
import { EventModel } from './event.model';
import { EventCollection } from './event.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EventEntityConfig = {
  name: 'Event',
  base: 'Microsoft.OData.SampleService.Models.TripPin.PlanItem',
  open: true,
  model: EventModel,
  collection: EventCollection,
  fields: {
    Description: {type: 'Edm.String'},
    OccursAt: {type: 'Microsoft.OData.SampleService.Models.TripPin.EventLocation', nullable: false}
  }
} as StructuredTypeConfig<Event>;
//#endregion