import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaContentRatingFrance } from './mediacontentratingfrance.entity';
//#endregion

export const MediaContentRatingFranceConfig = {
  name: "MediaContentRatingFrance",
  annotations: [],
  fields: {
    movieRating: {type: 'graph.ratingFranceMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingFranceTelevisionType', nullable: false}
  }
} as EntityConfig<MediaContentRatingFrance>;