//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Event } from './event.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EventEntityConfig = {
  name: 'Event',
  base: 'Microsoft.OData.SampleService.Models.TripPin.PlanItem',
  open: true,
  fields: {
    Description: {type: 'Edm.String'},
    OccursAt: {type: 'Microsoft.OData.SampleService.Models.TripPin.EventLocation', nullable: false}
  }
} as StructuredTypeConfig<Event>;
//#endregion