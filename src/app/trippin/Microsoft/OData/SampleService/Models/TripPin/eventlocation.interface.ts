import { Location, LocationSchema } from './location.interface';

export interface EventLocation extends Location {
  BuildingInfo: string
}

export const EventLocationSchema = Object.assign({}, LocationSchema, {
  BuildingInfo: {type: 'string'}
});