
export interface Airline {
  AirlineCode: string;
  Name: string
}

export const AirlineSchema = {
  
  keys: [ 
    {name: 'AirlineCode'}
  ],
  fields: [
    {name: 'AirlineCode', type: 'string'},
    {name: 'Name', type: 'string'}
  ]
};