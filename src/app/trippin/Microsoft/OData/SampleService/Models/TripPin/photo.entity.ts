
export interface Photo {
  Id: number;
  Name: string
}

export const PhotoSchema = {
  Id: {type: 'number', isKey: true, ref: 'Id'},
  Name: {type: 'string'}
};