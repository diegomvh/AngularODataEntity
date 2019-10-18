
export interface PlanItem {
  PlanItemId: number;
  ConfirmationCode: string;
  StartsAt: Date;
  EndsAt: Date;
  Duration: string
}

export const PlanItemSchema = {
  
  keys: [ 
    {name: 'PlanItemId'}
  ],
  fields: [
    {name: 'PlanItemId', type: 'number'},
    {name: 'ConfirmationCode', type: 'string'},
    {name: 'StartsAt', type: 'Date'},
    {name: 'EndsAt', type: 'Date'},
    {name: 'Duration', type: 'string'}
  ]
};