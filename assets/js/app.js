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
                id: 0,
                name: "Ready for seminar app",
                url: "index.html"
            },
            {
                id: 1,
                name: "Now",
                url: "#/app/now",
                class: "active"
            },
            {
                id: 2,
                name: "Archive",
                url: "#/app/archive"
            },
            {
                id: 3,
                name: "Register Speaker",
                url: "#/app/register"
            },
            {
                id: 4,
                name: "Logout",
                url: "#/login"
            }

        ];

        $scope.seminars = [
            {
                id: 0,
                title: "제 1회 정기 세미나",
                state: "Archived",
                tasks: [
                    {
                        id: 0,
                        name: "강사 섭외",
                        worker: "안재열",
                        progress: "100",
                        taskDetail: "speaker.html",
                        workerDetail: ""
                    },
                    {
                        id: 1,
                        name: "장소 예약",
                        worker: "이동훈",
                        progress: "100",
                        taskDetail: "place.html",
                        workerDetail: ""
                    },
                    {
                        id: 2,
                        name: "포스터 제작",
                        worker: "안재열",
                        progress: "100",
                        taskDetail: "poster.html",
                        workerDetail: ""
                    },
                    {
                        id: 3,
                        name: "모임 등록",
                        worker: "박세종",
                        progress: "100",
                        taskDetail: "seminar.html",
                        workerDetail: ""
                    },
                    {
                        id: 4,
                        name: "홍보",
                        worker: ["박세종", "안재열", "이동훈"],
                        progress: "100",
                        taskDetail: "promote.html",
                        workerDetail: ""
                    },
                    {
                        id: 5,
                        name: "회고",
                        worker: ["박세종", "안재열", "이동훈"],
                        progress: "100",
                        taskDetail: "rememberence.html",
                        workerDetail: ""
                    }
                ]
            },
            {
                id: 1,
                title: "제 2회 정기 세미나",
                state: "Archived",
                tasks: [
                    {
                        id: 0,
                        name: "강사 섭외",
                        worker: "안재열",
                        progress: "100",
                        taskDetail: "speaker.html",
                        workerDetail: ""
                    },
                    {
                        id: 1,
                        name: "장소 예약",
                        worker: "이동훈",
                        progress: "100",
                        taskDetail: "place.html",
                        workerDetail: ""
                    },
                    {
                        id: 2,
                        name: "포스터 제작",
                        worker: "안재열",
                        progress: "100",
                        taskDetail: "poster.html",
                        workerDetail: ""
                    },
                    {
                        id: 3,
                        name: "모임 등록",
                        worker: "박세종",
                        progress: "100",
                        taskDetail: "seminar.html",
                        workerDetail: ""
                    },
                    {
                        id: 4,
                        name: "홍보",
                        worker: ["박세종", "안재열", "이동훈"],
                        progress: "100",
                        taskDetail: "promote.html",
                        workerDetail: ""
                    },
                    {
                        id: 5,
                        name: "회고",
                        worker: ["박세종", "안재열", "이동훈"],
                        progress: "100",
                        taskDetail: "rememberence.html",
                        workerDetail: ""
                    }
                ]
            },
            {
                id: 2,
                title: "제 3회 정기 세미나",
                state: "Now",
                class: "active",
                tasks: [
                    {
                        id: 0,
                        name: "강사 섭외",
                        worker: "안재열",
                        progress: "100",
                        taskDetail: "speaker.html",
                        workerDetail: ""
                    },
                    {
                        id: 1,
                        name: "장소 예약",
                        worker: "이동훈",
                        progress: "100",
                        taskDetail: "place.html",
                        workerDetail: ""
                    },
                    {
                        id: 2,
                        name: "포스터 제작",
                        worker: "안재열",
                        progress: "100",
                        taskDetail: "poster.html",
                        workerDetail: ""
                    },
                    {
                        id: 3,
                        name: "모임 등록",
                        worker: "박세종",
                        progress: "100",
                        taskDetail: "seminar.html",
                        workerDetail: ""
                    },
                    {
                        id: 4,
                        name: "홍보",
                        worker: ["박세종", "안재열", "이동훈"],
                        progress: "100",
                        taskDetail: "promote.html",
                        workerDetail: ""
                    },
                    {
                        id: 5,
                        name: "회고",
                        worker: ["박세종", "안재열", "이동훈"],
                        progress: "0",
                        taskDetail: "rememberence.html",
                        workerDetail: ""
                    }
                ]
            }
        ];

        $scope.currentMenu = $scope.menus[1];
        $scope.currentSeminar = $scope.seminars[$scope.seminars.length - 1];

        function setCurrentMenu(menu) {
            $scope.currentMenu = menu;
            console.log("Current Menu: " + menu.name);
        }

        function isCurrentMenu(menu) {
            return $scope.currentMenu !== null && menu.name === $scope.currentMenu.name;
        }

        function setCurrentSeminar(seminar) {
            $scope.currentSeminar = seminar;
            console.log("Current Seminar: " + seminar.title);
        }

        function isCurrentSeminar(seminar) {
            return $scope.currentSeminar !== null && seminar.title === $scope.currentSeminar.title;
        }

        $scope.setCurrentMenu = setCurrentMenu;
        $scope.isCurrentMenu = isCurrentMenu;
        $scope.setCurrentSeminar = setCurrentSeminar;
        $scope.isCurrentSeminar = isCurrentSeminar;
    });
