/**
*@FileName:categoryController.js
*@Created By:Habeeb
*@Date:
*@Purpose:To display the categoryImages 
  */
var app = angular.module("myApp")
    .controller("mainController", function($scope, categoryService) {
        var array = [];
        $scope.images = [{
            'src': "loading.gif",
            caption: ' loading'
        }];
        $scope.options = {
            clicking: true,
            sourceProp: 'src',
            visible: 11,
            perspective: 35,
            startSlide: 0,
            border: 3,
            dir: 'rtl',
            width: 420,
            height: 260,
            top: 200,
            space: 220,
            autoRotationSpeed: 5000,
            loop: true
        };
        var promise = categoryService.result();
        promise.then(function(data) {
            $scope.images = [];
            var result = data.data.Responsedetails.category_id_array;
            for (i in result) {
                $scope.images.push({
                    'src': result[i].image_path["50x50"],
                    caption: result[i].category_name,
                    cid: result[i].category_id,
                    pid: result[i].parent_category_id
                });
            }
            console.log(result);
        });
    })
