
export interface Photo {
  Id: number;
  Name?: string
}

export const PhotoSchema = {
  Id: {type: 'number', key: true, ref: 'Id', nullable: false},
  Name: {type: 'string'}
};