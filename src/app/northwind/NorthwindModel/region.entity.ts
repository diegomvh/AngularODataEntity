import { Duration } from 'angular-odata';

import { Territory } from './territory.entity';

export const RegionEntityType = 'NorthwindModel.Region';
export interface Region {
  RegionID: number;
  RegionDescription: string;
  Territories?: Territory[];
}
