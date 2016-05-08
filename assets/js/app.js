/**
 * Created by donghoon on 2016. 5. 8..
 */
angular.module('DomainDrivenApp', [])
    .run(function () {
        console.log("DomainDriven Community App is ready!")
    })
    .controller('MainCtrl', function ($scope) {
        $scope.menus = [
            {
                name: "Ready for seminar app",
                url: "index.html"
            },
            {
                name: "Now",
                url: "#/app/now",
                class: "active"
            },
            {
                name: "Archive",
                url: "#/app/archive"
            },
            {
                name: "Register Speaker",
                url: "#/app/register"
            },
            {
                name: "Logout",
                url: "#/login"
            }

        ];

        $scope.seminars = [
            {
                title: "제 1회 정기 세미나",
                state: "Archived"
            },
            {
                title: "제 2회 정기 세미나",
                state: "Archived"
            },
            {
                title: "제 3회 정기 세미나",
                state: "Now",
                class: "active"
            }
        ];

        $scope.tasks = [
            {
                name: "강사 섭외",
                worker: "안재열",
                progress: "80",
                taskDetail: "speaker.html",
                workerDetail: ""
            },
            {
                name: "장소 예약",
                worker: "이동훈",
                progress: "50",
                taskDetail: "place.html",
                workerDetail: ""
            },
            {
                name: "모임 등록",
                worker: " 박세종",
                progress: "0",
                taskDetail: "seminar.html",
                workerDetail: ""
            }
        ];
    });
