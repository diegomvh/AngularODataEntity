import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaContentRatingNewZealand } from './mediacontentratingnewzealand.entity';
//#endregion

export const MediaContentRatingNewZealandConfig = {
  name: "MediaContentRatingNewZealand",
  annotations: [],
  fields: {
    movieRating: {type: 'graph.ratingNewZealandMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingNewZealandTelevisionType', nullable: false}
  }
} as EntityConfig<MediaContentRatingNewZealand>;