import { Location, LocationSchema } from './location.entity';

export interface AirportLocation extends Location {
  Loc: any
}

export const AirportLocationSchema = Object.assign({}, LocationSchema, {
  Loc: {type: 'Object'}
});