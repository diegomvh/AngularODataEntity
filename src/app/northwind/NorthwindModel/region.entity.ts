

import { Territory } from './territory.entity';

// #region Custom
// #endregion Custom
export const RegionEntityType = 'NorthwindModel.Region';
export interface Region {
  RegionID: number;
  RegionDescription: string;
  Territories?: Territory[];
// #region Custom
// #endregion Custom
}
