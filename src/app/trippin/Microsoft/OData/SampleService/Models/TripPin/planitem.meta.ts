
export const PlanItemMeta = {
  type: "Microsoft.OData.SampleService.Models.TripPin.PlanItem",
  fields: {
    PlanItemId: {type: 'number', key: true, ref: 'PlanItemId', nullable: false},
    ConfirmationCode: {type: 'string'},
    StartsAt: {type: 'Date'},
    EndsAt: {type: 'Date'},
    Duration: {type: 'string'}
  }
};