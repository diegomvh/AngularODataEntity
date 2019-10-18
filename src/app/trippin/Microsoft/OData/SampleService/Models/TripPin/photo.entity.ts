
export interface Photo {
  Id: number;
  Name: string
}

export const PhotoSchema = {
  
  keys: [ 
    {name: 'Id'}
  ],
  fields: [
    {name: 'Id', type: 'number'},
    {name: 'Name', type: 'string'}
  ]
};