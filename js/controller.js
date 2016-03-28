var myApp = angular.module('myApp', []);
// console.log(myApp)
myApp.controller('myController', function($scope){
	
	$scope.images = [];
	for(i=0; i<32; i++){
		$scope.images.push(
			{
			src:"ng-image.jpg",
			name: "Cool image"
			}
		);
	}

	// $scope.images = [
	// 	{
	// 		src:"<img src='img/image1.jpg'>",
	// 		name: "Cool image"
	// 	}
	// 	// "<img src='img/image1.jpg'>",
	// 	// "<img src='img/image2.jpg'>",
	// 	// "<img src='img/image3.jpg'>",
	// 	// "<img src='img/image4.jpg'>",
	// 	// "<img src='img/image5.jpg'>",
	// ];
});