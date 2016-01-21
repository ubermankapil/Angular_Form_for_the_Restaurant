'use strict';
angular.module('confusionApp', [])

    .controller('MenuController', ['$scope', function($scope) {
        $scope.tab = 1;
        $scope.filterText = '';
        $scope.dishes=[
             {
                name:'Masala Dosa',
                image: 'images/dosa.jpg',
                category: 'mains',
                label:'',
                price:'1.99',
                description:'Dosa is a fermented crepe made from rice batter and black lentils. It is a staple dish in South Indian states.',
                comment: ''
            },
            {
                name:'Zucchipakoda',
                image: 'images/zucchipakoda.png',
                category: 'appetizer',
                label:'',
                price:'1.99',
                description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                comment: ''
            },
            {
                name:'Fruit Punch',
                image: 'images/fruitpunch.jpg',
                category: 'dessert',
                label:'New',
                price:'8.00',
                description:'Juicy and Pulpy mixture of all major fruits ! Very Pulpy and Tasty !',
                comment: ''
            },
            {
                name:'Vadonut',
                image: 'images/vadonut.png',
                category: 'appetizer',
                label:'New',
                price:'1.99',
                description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
                comment: ''
            },
            {
                name:'Pastries',
                image: 'images/pastries.png',
                category: 'dessert',
                label:'',
                price:'4.99',
                description:'It includes many of the various kinds of baked products made from ingredients such as flour, sugar, milk, butter, shortening, baking powder, and eggs.',
                comment: ''
            },
            {
                name:'Paneer Tikka',
                image: 'images/tikka.jpg',
                category: 'appetizer',
                label:'New',
                price:'10.00',
                description:'A spicy and soft milky finished pieces fried with Indian masalas and vegetables like onions, capsicums',
                comment: ''
            },
            {
                name:'Chicken Biryani',
                image: 'images/chicken-biryani.jpg',
                category: 'mains',
                label:'',
                price:'2.99',
                description:'Chicken Biryani is a mixed rice dish from the Indian subcontinent. It is made with spices, rice and meat.',
                comment: ''
            },
            {
                name:'French Fries',
                image: 'images/fries.png',
                category: 'appetizer',
                label:'',
                price:'2.99',
                description:'French fries, chips, fries, finger chips, or French-fried potatoes are batons of deep-fried potato.',
                comment: ''
            },
            {
                name:'Uthapizza',
                image: 'images/uthapizza.png',
                category: 'mains',
                label:'Hot',
                price:'4.99',
                description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                comment: ''
            },
            {
                name:'Tandoori Chicken',
                image: 'images/chicken.jpg',
                category: 'mains',
                label:'',
                price:'10.00',
                description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                comment: ''
            },
            {
                name:'Sandeshi',
                image: 'images/sandeshi.jpg',
                category: 'dessert',
                label:'',
                price:'2.99',
                description:'Sandeshi is one of the most widely known and appreciated sweets in India',
                comment: ''
            }
        ];

        $scope.showDetails = false;

        $scope.toggleDetails = function() {
            $scope.showDetails = !$scope.showDetails;
        };

        $scope.select = function(setTab) {
            $scope.tab = setTab;
            if (setTab === 2) {
                $scope.filterText = "appetizer";
            }
            else if (setTab === 3) {
                $scope.filterText = "mains";
            }
            else if (setTab === 4) {
                $scope.filterText = "dessert";
            }
            else {
                $scope.filterText = "";
            }
        };
        $scope.isSelected = function (checkTab) {
            return ($scope.tab === checkTab);
        };
    }])
     .controller('ContactController', ['$scope', function($scope) {
            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                        var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
                        $scope.channels = channels;
            $scope.invalidChannelSelection = false;
                                }])
        .controller('FeedbackController', ['$scope', function($scope) {
                        $scope.sendFeedback = function() {
                                console.log($scope.feedback);
                                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                                       agree:false, email:"" };
                    $scope.feedback.mychannel="";

                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
        }]);








