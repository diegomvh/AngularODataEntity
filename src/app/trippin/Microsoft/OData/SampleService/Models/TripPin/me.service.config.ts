import { ServiceConfig } from 'angular-odata';


export const MeServiceConfig = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Me",
  annotations: [
  {
    "type": "Org.OData.Core.V1.ResourcePath"
  }
]
} as ServiceConfig;