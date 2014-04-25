'use strict';

var mongoose = require('mongoose'),
    Maze = mongoose.model('Maze');

/**
 * Get mazes
 */
exports.mazes = function(req, res) {
  return Maze.find(function (err, mazes) {
    if (!err) {
      return res.json(mazes);
    } else {
      return res.send(err);
    }
  });
};