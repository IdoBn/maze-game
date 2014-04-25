'use strict';

var mongoose = require('mongoose'),
  Maze = mongoose.model('Maze');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Maze.find({}).remove(function() {
  Maze.create({
    name: 'First maze',
    info: 'the very first maze!',
    map: {
      width: 7,
      height: 5,
      startX: 1,
      startY: 1,
      startOrientation: 'north',
      endX: 7,
      endY: 1,
      spaces: [
        null,
        [
            null,
            {
                "north": false,
                "east": true,
                "south": false,
                "west": false
            },
            {
                "north": false,
                "east": false,
                "south": false,
                "west": false
            },
            {
                "north": true,
                "east": false,
                "south": false,
                "west": false
            },
            {
                "north": false,
                "east": false,
                "south": false,
                "west": false
            },
            {
                "north": false,
                "east": false,
                "south": false,
                "west": false
            }
        ],
        [
            null,
            {
                "north": true,
                "east": false,
                "south": false,
                "west": false
            },
            {
                "north": true,
                "east": false,
                "south": false,
                "west": false
            },
            {
                "north": false,
                "east": true,
                "south": false,
                "west": false
            },
            {
                "north": true,
                "east": false,
                "south": false,
                "west": false
            },
            {
                "north": false,
                "east": false,
                "south": false,
                "west": false
            }
        ],
        [
            null,
            {
                "north": false,
                "east": true,
                "south": false,
                "west": false
            },
            {
                "north": true,
                "east": true,
                "south": false,
                "west": false
            },
            {
                "north": false,
                "east": false,
                "south": false,
                "west": false
            },
            {
                "north": true,
                "east": true,
                "south": false,
                "west": false
            },
            {
                "north": false,
                "east": false,
                "south": false,
                "west": false
            }
        ],
        [
            null,
            {
                "north": false,
                "east": false,
                "south": false,
                "west": false
            },
            {
                "north": true,
                "east": false,
                "south": false,
                "west": false
            },
            {
                "north": true,
                "east": true,
                "south": false,
                "west": false
            },
            {
                "north": false,
                "east": false,
                "south": false,
                "west": false
            },
            {
                "north": false,
                "east": true,
                "south": false,
                "west": false
            }
        ],
        [
            null,
            {
                "north": true,
                "east": false,
                "south": false,
                "west": false
            },
            {
                "north": false,
                "east": true,
                "south": false,
                "west": false
            },
            {
                "north": false,
                "east": false,
                "south": false,
                "west": false
            },
            {
                "north": false,
                "east": true,
                "south": false,
                "west": false
            },
            {
                "north": false,
                "east": false,
                "south": false,
                "west": false
            }
        ],
        [
            null,
            {
                "north": false,
                "east": true,
                "south": false,
                "west": false
            },
            {
                "north": true,
                "east": false,
                "south": false,
                "west": false
            },
            {
                "north": false,
                "east": true,
                "south": false,
                "west": false
            },
            {
                "north": true,
                "east": false,
                "south": false,
                "west": false
            },
            {
                "north": false,
                "east": false,
                "south": false,
                "west": false
            }
        ],
        [
            null,
            {
                "north": false,
                "east": false,
                "south": false,
                "west": false
            },
            {
                "north": false,
                "east": false,
                "south": false,
                "west": false
            },
            {
                "north": true,
                "east": false,
                "south": false,
                "west": false
            },
            {
                "north": true,
                "east": false,
                "south": false,
                "west": false
            },
            {
                "north": false,
                "east": false,
                "south": false,
                "west": false
            }
        ]
      ]
    }
  }, function() {
      console.log('finished populating things');
    }
  );
});
