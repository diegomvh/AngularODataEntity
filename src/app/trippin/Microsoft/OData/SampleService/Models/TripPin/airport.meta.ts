
export const AirportMeta = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Airport",
  set: "Airports",
  fields: {
    IcaoCode: {type: 'string', key: true, ref: 'IcaoCode', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    Name: {type: 'string', nullable: false},
    IataCode: {type: 'string', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Immutable","bool":true}]},
    Location: {type: 'Microsoft.OData.SampleService.Models.TripPin.AirportLocation', nullable: false}
  }
};