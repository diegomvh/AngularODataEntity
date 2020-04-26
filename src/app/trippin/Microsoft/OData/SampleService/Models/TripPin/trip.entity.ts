import { TripMeta } from './trip.meta';
import { PhotoMeta } from './photo.meta';
import { PlanItemMeta } from './planitem.meta';
import { Photo } from './photo.entity';
import { PlanItem } from './planitem.entity';
import { PhotosService } from './photos.service';

export interface Trip {
  TripId: number;
  ShareId?: string;
  Description?: string;
  Name: string;
  Budget: number;
  StartsAt: Date;
  EndsAt: Date;
  Tags: string[];
  Photos?: Photo[];
  PlanItems?: PlanItem[]
}