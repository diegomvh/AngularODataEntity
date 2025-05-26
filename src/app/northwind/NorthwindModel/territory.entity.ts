import { Duration } from 'angular-odata';
import { Region } from './region.entity';
import { Employee } from './employee.entity';

export const TerritoryEntityType = 'NorthwindModel.Territory';
export interface Territory {
  TerritoryID: string;
  TerritoryDescription: string;
  RegionID: number;
  Region: Region;
  Employees: Employee[];
}
