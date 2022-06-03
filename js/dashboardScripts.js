angular.module("mlaasMain").controller("graphController", function($scope) {
    $scope.loadGraph = function() {
     //   alert("randomly load data in dashboard");
        const ctx = document.getElementById('CourseEnrolment').getContext('2d');
        
        const CourseEnrolment = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['NFT Basics', 'Crypto 101', 'MTB 101', 'Baking with Martha', 'Sweets with Sally', 'English 101'],
                datasets: [{
                    label: 'Course Enrolments',
                    data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 255)),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162 , 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {

                scales: {
                    y: {
                        beginAtZero: true
                    
                    }
                }
            }
        });


  
    };

});


angular.module("mlaasMain").controller("graphController2", function ($scope) {
    $scope.loadGraph2 = function () {
        //   alert("randomly load data in dashboard");
        const ctx = document.getElementById('chart2').getContext('2d');

        const chart2 = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5', 'Chapter 6'],
                datasets: [{
                       
                    label: 'Dataset 1',
                    data: [10, 80, 56, 60], //Array.from({ length: 6 }, () => Math.floor(Math.random() * 25)),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162 , 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                   
                        label: 'Engagement',
                        data: [10, 80, 56, 60, 100, 90], //: Array.from({ length: 6 }, () => Math.floor(Math.random() * 255)),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162 , 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Student Engagement per student'
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100
                        }
                    }

                }

            }
        });



    };

});



angular.module("mlaasMain").controller("graphController3", function ($scope) {
    $scope.loadGraph3 = function () {
        //   alert("randomly load data in dashboard");
        const ctx = document.getElementById('CourseCompletion').getContext('2d');

        const CourseCompletion = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Complete', 'Inprogress', 'Not started'],
                datasets: [{

                    label: 'Chapter status',
                    data: Array.from({ length: 3 }, () => Math.floor(Math.random() * 25)),
                    backgroundColor: [
                        'rgba(66, 255, 69, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(176, 255, 87, 1)',
                        'rgba(235, 214, 55, 1)',
                        'rgba(235, 55, 55, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],

                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Course completion for Dakota Rice - English 101'
                    }

                }
            }
        });



    };

});


