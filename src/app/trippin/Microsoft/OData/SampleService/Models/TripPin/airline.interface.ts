
export interface Airline {
  AirlineCode: string;
  Name: string
}

export const AirlineSchema = {
  AirlineCode: {type: 'string', key: true, ref: 'AirlineCode', nullable: false},
  Name: {type: 'string', nullable: false}
};