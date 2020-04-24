
export const PhotoMeta = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Photo",
  set: "Photos",
  fields: {
    Id: {type: 'number', key: true, ref: 'Id', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    Name: {type: 'string'}
  }
};