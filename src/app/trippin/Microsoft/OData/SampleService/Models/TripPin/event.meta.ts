
export const EventMeta = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Event",
  base: "Microsoft.OData.SampleService.Models.TripPin.PlanItem",
  fields: {
    Description: {type: 'string'},
    OccursAt: {type: 'Microsoft.OData.SampleService.Models.TripPin.EventLocation', nullable: false}
  }
};