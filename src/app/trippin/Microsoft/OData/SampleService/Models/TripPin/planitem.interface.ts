
export interface PlanItem {
  PlanItemId: number;
  ConfirmationCode: string;
  StartsAt: Date;
  EndsAt: Date;
  Duration: string
}

export const PlanItemSchema = {
  PlanItemId: {type: 'number', isKey: true, ref: 'PlanItemId'},
  ConfirmationCode: {type: 'string'},
  StartsAt: {type: 'Date'},
  EndsAt: {type: 'Date'},
  Duration: {type: 'string'}
};