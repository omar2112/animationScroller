
var myApp = angular.module('myApp', [])

// Main controller
.controller('MainController', function($scope) {
     // Data for the chart
     $scope.data = [
       {id:0, text:'Scroll for a locking animation. Square: Data. Circles: Processes.'},
       {id:1, text:'Problems arise when two parallel processes attempt to alter the same data. The output can be different than expected when parallel processes happen at the same time.'},
       {id:2, text:'One solution to this problem is locking, which prevents additional processes from accesing data until the first process has finished.'},
       {id:3, text:'Paragraph 3'}
     ];

     // Array of objects that correspond to each step
     $scope.settings = [
       {color:'black', fontSize:20, filter:function(d){return d.id<1}},
       {color:'black', fontSize:20, filter:function(d){return d.id < 2 && d.id > 0}},
       {color:'black', fontSize:20, filter:function(d){return d.id<3 && d.id > 1}},
       //{color:'green', fontSize:20, filter:function(d){return d}},
     ];

     $scope.step = 0;

    //$scope.squareDiv = document.getElementById("squareDiv");
    //$scope.squareDiv.style.top = 2500 + "px";
    //$scope.squareDiv.style.left = 600 + "px";
    //var myEl = angular.element( document.querySelector( '#squareDiv' ) );
    //myEl.style.top = 2500 + "px";

     // Text for each section
     $scope.sectionText = [
       {text:'Labeled shapes go here'},
	// {text:squareDiv},
	 {text:'Animation #1 goes here'},
       {text:'Animation #2 goes here'},
       {text:'Section 3'}
     ];
    /*
    squareDiv = document.getElementById("squareDiv");
    squareDiv.style.top = 2500 + "px";
    squareDiv.style.left = 600 + "px";
     */

     // Desired section height
     $scope.sectionHeight = 400;
 })

// Projects controller
.controller('ProjectsController', function($scope, ProjectData){
  ProjectData.then(function(data){
    $scope.projects = data
  })
})

// Scroll directive
.directive("scroll", function ($window) {
    return {
      restrict:'E', // this directive is specified as an html element <scroll>
      scope:false, // use global scope
      // Create a link function that allows dynamic element creation
      link:function(scope, elem) {
          elem.bind("scroll", function() {
              scope.step = Math.ceil((this.scrollTop - 10)/ scope.sectionHeight);
	      console.log(this.scrollTop);
              scope.$apply();
          });
      }
    };
})

// Create a directive 'scatter' that creates scatterplots
.directive('paragraphChart', function($filter, $compile) {
	// Return your directive element
	return {
		restrict:'E', // this directive is specified as an html element <scatter>
    scope:false,
		// Create a link function that allows dynamic element creation
		link:function(scope,elem,attrs){
			// Use the scope.$watch method to watch for changes to the step, then re-draw your chart
			scope.$watch('step', function() {

        // Instantiate your chart with given settings
        var color = scope.settings[scope.step].color;
        var fontSize = scope.settings[scope.step].fontSize;
        var myChart = ParagraphChart().color(color).fontSize(fontSize);

        // Get the current data
        var currentData = scope.data.filter(scope.settings[scope.step].filter);

  			// Wrapper element to put your svg (chart) in
  			wrapper = d3.select(elem[0])
          .datum(currentData)
          .call(myChart);
			});
		}
	};
});


