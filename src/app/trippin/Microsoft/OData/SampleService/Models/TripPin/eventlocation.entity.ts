import { Location, LocationSchema } from './location.entity';

export interface EventLocation extends Location {
  BuildingInfo: string
}

export const EventLocationSchema = Object.assign({}, LocationSchema, {
  BuildingInfo: {type: 'string'}
});