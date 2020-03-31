import { PhotosService } from './photos.service';

export const PhotoMeta = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Photo",
  set: "Photos",
  fields: {
    Id: {type: 'number', key: true, ref: 'Id', nullable: false},
    Name: {type: 'string'}
  }
};