

import { Region } from './region.entity';
import { Employee } from './employee.entity';

// #region Custom
// #endregion Custom
export const TerritoryEntityType = 'NorthwindModel.Territory';
export interface Territory {
  TerritoryID: string;
  TerritoryDescription: string;
  RegionID: number;
  Region?: Region;
  Employees?: Employee[];
// #region Custom
// #endregion Custom
}
