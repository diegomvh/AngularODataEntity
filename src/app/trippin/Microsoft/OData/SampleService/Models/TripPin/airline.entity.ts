
export interface Airline {
  AirlineCode: string;
  Name: string
}

export const AirlineSchema = {
  AirlineCode: {type: 'string', isKey: true, ref: 'AirlineCode'},
  Name: {type: 'string'}
};