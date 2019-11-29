
export interface PlanItem {
  PlanItemId: number;
  ConfirmationCode?: string;
  StartsAt?: Date;
  EndsAt?: Date;
  Duration?: string
}

export const PlanItemSchema = {
  PlanItemId: {type: 'number', key: true, ref: 'PlanItemId', nullable: false},
  ConfirmationCode: {type: 'string'},
  StartsAt: {type: 'Date'},
  EndsAt: {type: 'Date'},
  Duration: {type: 'string'}
};