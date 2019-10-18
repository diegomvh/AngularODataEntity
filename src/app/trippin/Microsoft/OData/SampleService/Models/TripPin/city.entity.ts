
export interface City {
  CountryRegion: string;
  Name: string;
  Region: string
}

export const CitySchema = {
  
  keys: [ 
    
  ],
  fields: [
    {name: 'CountryRegion', type: 'string'},
    {name: 'Name', type: 'string'},
    {name: 'Region', type: 'string'}
  ]
};