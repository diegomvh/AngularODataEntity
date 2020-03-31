import { PlanItemMeta } from './planitem.meta';

export interface PlanItem {
  PlanItemId: number;
  ConfirmationCode?: string;
  StartsAt?: Date;
  EndsAt?: Date;
  Duration?: string
}