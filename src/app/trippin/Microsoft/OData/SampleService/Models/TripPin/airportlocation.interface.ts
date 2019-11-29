import { Location, LocationSchema } from './location.interface';

export interface AirportLocation extends Location {
  Loc: any
}

export const AirportLocationSchema = Object.assign({}, LocationSchema, {
  Loc: {type: 'Object', nullable: false, srid: 4326}
});