'use strict'

angular.module('mazeApp')
  .controller 'MainCtrl', ($scope, $http) ->
    $http.get('/api/mazes').success (data) ->
      map = data[0].map
      $scope.maze = new Maze(map.width, map.height)
      $scope.maze.setStart(map.startX, map.startY, map.startOrientation)
      $scope.maze.setEnd(map.endX, map.endY)
      $scope.maze.spaces = map.spaces
      console.log $scope.maze

    $scope.gameReady = ->
    	r = new Robot()
    	i = new RobotMazeInterface(r, $scope.maze, '#maze-goes-here')
    	i.render()
