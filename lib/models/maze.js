'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Thing Schema
 */
var MazeSchema = new Schema({
  name: String,
  info: String,
  map: {
    width: Number,
    height: Number,
    startX: Number,
    startY: Number,
    startOrientation: String,
    endX: Number,
    endY: Number,
    spaces: [
        null,
        [
            null,
            {
                north: Boolean,
                east: Boolean,
                south: Boolean,
                west: Boolean
            }
        ]
    ]
  }
});

/**
 * Validations
 */
MazeSchema.path('map.startOrientation').validate(function (orientation) {
  return ["north", 'east', 'south', 'west'].indexOf(orientation) !== -1;
}, 'Direction must be on of north, east, south or west');

mongoose.model('Maze', MazeSchema);
