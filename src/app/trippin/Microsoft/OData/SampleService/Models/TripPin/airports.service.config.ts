import { ServiceConfig } from 'angular-odata';


export const AirportsServiceConfig = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Airports",
  annotations: [
  {
    "type": "Org.OData.Core.V1.ResourcePath"
  },
  {
    "type": "Org.OData.Capabilities.V1.SearchRestrictions"
  },
  {
    "type": "Org.OData.Capabilities.V1.InsertRestrictions"
  },
  {
    "type": "Org.OData.Capabilities.V1.DeleteRestrictions"
  }
]
} as ServiceConfig;