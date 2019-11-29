
export interface City {
  CountryRegion: string;
  Name: string;
  Region: string
}

export const CitySchema = {
  CountryRegion: {type: 'string', nullable: false},
  Name: {type: 'string', nullable: false},
  Region: {type: 'string', nullable: false}
};