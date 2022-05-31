var mlaasMain = angular.module("mlaasMain", ['ngRoute']);

mlaasMain.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
    $routeProvider
        .when("/login", {
            title: "Login - MLAAS",
            templateUrl: "pages/login.htm"
        })
        .when("/dashboard", {
            title: "Dashboard - MLAAS",
            templateUrl: "pages/dashboard.htm",
        })
        .when("/aboutus", {
            title: "About us - MLAAS",
            templateUrl: "pages/aboutus.htm"
        })
        .when("/coursemanagement", {
            title: "Course management - MLAAS",
            templateUrl: "pages/coursemanagement.htm"
        })
        .when("/activitylibrary", {
            title: "Course Activity Library - MLAAS",
            templateUrl: "pages/activitylibrary.htm"
        })
        .when("/contentcreation", {
            title: "Course Content Creation - MLAAS",
            templateUrl: "pages/contentcreation.htm"
        })
        .when("/courselist", {
            title: "Course List - MLAAS",
            templateUrl: "pages/courselist.htm"
        })
        .when("/profile", {
            title: "Personal Profile - MLAAS",
            templateUrl: "pages/profile.htm"
        })
        .when("/studentManagement", {
            title: "Student management - MLAAS",
            templateUrl: "pages/studentManagement.htm"
        })
        .when("/studentManagement_WebProg", {
            title: "Student management - MLAAS",
            templateUrl: "pages/studentManagement_WebProg.htm"
        })
        .when("/studentManagement_Network", {
            title: "Student management - MLAAS",
            templateUrl: "pages/studentManagement_Network.htm"
        })
        .when("/studentManagement_JS", {
            title: "Student management - MLAAS",
            templateUrl: "pages/studentManagement_JS.htm"
        })
        .when("/quiz_create", {
            title: "Create Quiz - teacher",
            templateUrl: "pages/quiz_create.htm"
        })
        .when("/quiz_manage", {
            title: "Manage Quiz - teacher",
            templateUrl: "pages/quiz_manage.htm"
        })
        .when("/changePassword", {
            title: "Change Password",
            templateUrl: "pages/changePassword.htm"
        })
        .when("/billing", {
            title: "Billing",
            templateUrl: "pages/billing.htm"
        })
        .when("/student_courses", {
            title: "Student Courses",
            templateUrl: "pages/student_courses.htm"
        })
        .when("/student_quiz", {
            title: "Student Quizzes",
            templateUrl: "pages/student_quiz.htm"
        })
        .when("/subjectLists_English", {
            title: "English",
            templateUrl: "pages/subjectLists_English.htm"
        })
        .when("/signup", {
            title: "Sign Up",
            templateUrl: "pages/signup.htm"
        })
});