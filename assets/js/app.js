/**
 * Created by donghoon on 2016. 5. 8..
 */
$(".speaker-multiple").select2();

angular.module('DomainDrivenApp', [])
    .run(function () {
        console.log("DomainDriven Community App is ready!")
    })
    .controller('MainCtrl', function ($scope) {
        $scope.menus = [
            {
                id: 0,
                name: "Now",
                state: "Now",
                url: "#"
            },
            {
                id: 1,
                name: "Archived",
                state: "Archived",
                url: "#"
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
                        progress: 100,
                        taskDetail: "speaker.html",
                        workerDetail: "",
                        isCompleted: true,
                        text: "Restart "
                    },
                    {
                        id: 1,
                        name: "장소 예약",
                        worker: "이동훈",
                        progress: 100,
                        taskDetail: "place.html",
                        workerDetail: "",
                        isCompleted: true,
                        text: "Restart "
                    },
                    {
                        id: 2,
                        name: "포스터 제작",
                        worker: "안재열",
                        progress: 100,
                        taskDetail: "poster.html",
                        workerDetail: "",
                        isCompleted: true,
                        text: "Restart "
                    },
                    {
                        id: 3,
                        name: "모임 등록",
                        worker: "박세종",
                        progress: 100,
                        taskDetail: "seminar.html",
                        workerDetail: "",
                        isCompleted: true,
                        text: "Restart "
                    },
                    {
                        id: 4,
                        name: "홍보",
                        worker: ["박세종", "안재열", "이동훈"],
                        progress: 100,
                        taskDetail: "promote.html",
                        workerDetail: "",
                        isCompleted: true,
                        text: "Restart "
                    },
                    {
                        id: 5,
                        name: "회고",
                        worker: ["박세종", "안재열", "이동훈"],
                        progress: 100,
                        taskDetail: "rememberence.html",
                        workerDetail: "",
                        isCompleted: true,
                        text: "Restart "
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
                        progress: 100,
                        taskDetail: "speaker.html",
                        workerDetail: "",
                        isCompleted: true,
                        text: "Restart "
                    },
                    {
                        id: 1,
                        name: "장소 예약",
                        worker: "이동훈",
                        progress: 100,
                        taskDetail: "place.html",
                        workerDetail: "",
                        isCompleted: true,
                        text: "Restart "
                    },
                    {
                        id: 2,
                        name: "포스터 제작",
                        worker: "안재열",
                        progress: 100,
                        taskDetail: "poster.html",
                        workerDetail: "",
                        isCompleted: true,
                        text: "Restart "
                    },
                    {
                        id: 3,
                        name: "모임 등록",
                        worker: "박세종",
                        progress: 100,
                        taskDetail: "seminar.html",
                        workerDetail: "",
                        isCompleted: true,
                        text: "Restart "
                    },
                    {
                        id: 4,
                        name: "홍보",
                        worker: ["박세종", "안재열", "이동훈"],
                        progress: 100,
                        taskDetail: "promote.html",
                        workerDetail: "",
                        isCompleted: true,
                        text: "Restart "
                    },
                    {
                        id: 5,
                        name: "회고",
                        worker: ["박세종", "안재열", "이동훈"],
                        progress: 100,
                        taskDetail: "rememberence.html",
                        workerDetail: "",
                        isCompleted: true,
                        text: "Restart "
                    }
                ]
            },
            {
                id: 2,
                title: "제 3회 정기 세미나",
                state: "Now",
                tasks: [
                    {
                        id: 0,
                        name: "강사 섭외",
                        worker: "안재열",
                        progress: 100,
                        taskDetail: "speaker.html",
                        workerDetail: "",
                        isCompleted: true,
                        text: "Restart "
                    },
                    {
                        id: 1,
                        name: "장소 예약",
                        worker: "이동훈",
                        progress: 100,
                        taskDetail: "place.html",
                        workerDetail: "",
                        isCompleted: true,
                        text: "Restart "
                    },
                    {
                        id: 2,
                        name: "포스터 제작",
                        worker: "안재열",
                        progress: 100,
                        taskDetail: "poster.html",
                        workerDetail: "",
                        isCompleted: true,
                        text: "Restart "
                    },
                    {
                        id: 3,
                        name: "모임 등록",
                        worker: "박세종",
                        progress: 100,
                        taskDetail: "seminar.html",
                        workerDetail: "",
                        isCompleted: true,
                        text: "Restart "
                    },
                    {
                        id: 4,
                        name: "홍보",
                        worker: ["박세종", "안재열", "이동훈"],
                        progress: 0,
                        taskDetail: "promote.html",
                        workerDetail: "",
                        isCompleted: false,
                        text: "Complete"
                    },
                    {
                        id: 5,
                        name: "회고",
                        worker: ["박세종", "안재열", "이동훈"],
                        progress: 0,
                        taskDetail: "rememberence.html",
                        workerDetail: "",
                        isCompleted: false,
                        text: "Complete"
                    }
                ]
            }
        ];

        $scope.currentMenu = $scope.menus[0];
        $scope.currentSeminar = $scope.seminars[$scope.seminars.length - 1];

        function setCurrentMenu(menu) {
            $scope.currentMenu = menu;
            if ($scope.currentMenu.state === "Now") {
                $scope.currentSeminar = $scope.seminars[$scope.seminars.length - 1];
            } else if ($scope.currentMenu.state === "Archived") {
                $scope.currentSeminar = $scope.seminars[$scope.seminars.length - 2];
            } else {
                $scope.currentSeminar = $scope.seminars[$scope.seminars.length - 1];
            }
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

        function updateTaskState(task) {
            var index = _.findIndex($scope.currentSeminar.tasks, function (b) {
                return b.id == task.id;
            });

            var currentTask = $scope.currentSeminar.tasks[index];
            var currentTaskState = currentTask.isCompleted;

            console.log("This task index is " + index);
            console.log("This task is completed : " + currentTaskState);

            if (currentTaskState) {
                currentTask.isCompleted = false;
                currentTask.text = "Complete";
            } else {
                currentTask.isCompleted = true;
                currentTask.text = "Restart ";
            }
        }

        $scope.setCurrentMenu = setCurrentMenu;
        $scope.isCurrentMenu = isCurrentMenu;
        $scope.setCurrentSeminar = setCurrentSeminar;
        $scope.isCurrentSeminar = isCurrentSeminar;
        $scope.updateTaskState = updateTaskState;
    })
    .controller('SpCtrl', function ($scope) {
        $scope.speakers = [
            {
                name: "구강원",
                subject: "Spring StateMachine"
            },
            {
                name: "김형준",
                subject: "성장하는 스타트업의 프로세스 개선기"
            },
            {
                name: "이정근",
                subject: "쉽고도 어려운 알파고와 머신러닝 이야기"
            },
            {
                name: "장제휴",
                subject: "Go 프로그래밍 소개"
            }
        ];
    });
