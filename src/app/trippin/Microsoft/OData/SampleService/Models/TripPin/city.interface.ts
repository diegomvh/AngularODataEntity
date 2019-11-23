
export interface City {
  CountryRegion: string;
  Name: string;
  Region: string
}

export const CitySchema = {
  CountryRegion: {type: 'string'},
  Name: {type: 'string'},
  Region: {type: 'string'}
};