
export const AirlineMeta = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Airline",
  set: "Airlines",
  fields: {
    AirlineCode: {type: 'string', key: true, ref: 'AirlineCode', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    Name: {type: 'string', nullable: false}
  }
};