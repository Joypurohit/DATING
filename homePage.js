router.get("/home/:id", function (req, res) {
    User.findById(req.params.id, function (err, foundUser) {
        if (err) {
            console.log(err);
            req.flash("error", "Something went wrong!")
            res.redirect("back")
        } else {
            var array = [];
            var count = 0;
            var total = 14;
            var initialAge = Number(foundUser.relInitialAge);
            var finalAge = Number(foundUser.relFinalAge);

            //Female gender
            if (foundUser.gender === "Female") {
                if (foundUser.relPreference === "Straight") {
                    User.find({
                        _id: {
                            $ne: req.user
                        },
                        gender: "Male",
                        relType: foundUser.relType,
                        age: {
                            $range: [initialAge, finalAge]
                        }
                    }, function (data) {
                        data.forEach(function (match) {
                            if (foundUser.relDistance === "Long Distance Relationships") {
                                if (foundUser.city !== match.city) {
                                    count += 4;
                                }

                            } else if (foundUser.relDistance === "Short Distance Relationships") {
                                if (foundUser.city === match.city) {
                                    count += 4;
                                }

                            } else {
                                count += 4;
                            }
                            if (foundUser.maritalStatus === match.maritalStatus) {
                                count++;
                            }
                            if (foundUser.liveIn === match.liveIn) {
                                count++;
                            }
                            if (foundUser.currently === match.currently) {
                                count++;
                            }
                            if (foundUser.virgin === match.virgin) {
                                count++;
                            }
                            if (foundUser.cook === match.cook) {
                                count++;
                            }
                            if (foundUser.income === match.income) {
                                count++;
                            }
                            var percentage = (count / total) * 100;
                            var x = {
                                count: count,
                                userData: match,
                                percentage: percentage
                            };
                            array.push(x);
                            count = 0;

                        });

                    });
                } else if (foundUser.relPreference === "Homosexual") {
                    User.find({
                        _id: {
                            $ne: req.user
                        },
                        gender: "Female",
                        relType: foundUser.relType,
                        age: {
                            $range: [initialAge, finalAge]
                        }
                    }, function (data) {
                        data.forEach(function (match) {
                            if (foundUser.relDistance === "Long Distance Relationships") {
                                if (foundUser.city !== match.city) {
                                    count += 4;
                                }

                            } else if (foundUser.relDistance === "Short Distance Relationships") {
                                if (foundUser.city === match.city) {
                                    count += 4;
                                }

                            } else {
                                count += 4;
                            }
                            if (foundUser.maritalStatus === match.maritalStatus) {
                                count++;
                            }
                            if (foundUser.liveIn === match.liveIn) {
                                count++;
                            }
                            if (foundUser.currently === match.currently) {
                                count++;
                            }
                            if (foundUser.virgin === match.virgin) {
                                count++;
                            }
                            if (foundUser.cook === match.cook) {
                                count++;
                            }
                            if (foundUser.income === match.income) {
                                count++;
                            }
                            var percentage = (count / total) * 100;
                            var x = {
                                count: count,
                                userData: match,
                                percentage: percentage
                            };
                            array.push(x);
                            count = 0;

                        });

                    });

                } else {
                    User.find({
                        _id: {
                            $ne: req.user
                        },
                        relType: foundUser.relType,
                        age: {
                            $range: [initialAge, finalAge]
                        }
                    }, function (data) {
                        data.forEach(function (match) {
                            if (foundUser.relDistance === "Long Distance Relationships") {
                                if (foundUser.city !== match.city) {
                                    count += 4;
                                }

                            } else if (foundUser.relDistance === "Short Distance Relationships") {
                                if (foundUser.city === match.city) {
                                    count += 4;
                                }

                            } else {
                                count += 4;
                            }
                            if (foundUser.maritalStatus === match.maritalStatus) {
                                count++;
                            }
                            if (foundUser.liveIn === match.liveIn) {
                                count++;
                            }
                            if (foundUser.currently === match.currently) {
                                count++;
                            }
                            if (foundUser.virgin === match.virgin) {
                                count++;
                            }
                            if (foundUser.cook === match.cook) {
                                count++;
                            }
                            if (foundUser.income === match.income) {
                                count++;
                            }
                            var percentage = (count / total) * 100;
                            var x = {
                                count: count,
                                userData: match,
                                percentage: percentage
                            };
                            array.push(x);
                            count = 0;

                        });

                    });

                }

            }
            //Male gender
            else if (foundUser.gender === 'Male') {
                if (foundUser.relPreference === "Straight") {
                    User.find({
                        _id: {
                            $ne: req.user
                        },
                        gender: "Female",
                        relType: foundUser.relType,
                        age: {
                            $range: [initialAge, finalAge]
                        },
                        function (data) {
                            data.forEach(function (match) {
                                if (foundUser.relDistance === "Long Distance Relationships") {
                                    if (foundUser.city !== match.city) {
                                        count += 4;
                                    }

                                } else if (foundUser.relDistance === "Short Distance Relationships") {
                                    if (foundUser.city === match.city) {
                                        count += 4;
                                    }

                                } else {
                                    count += 4;
                                }
                                if (foundUser.maritalStatus === match.maritalStatus) {
                                    count++;
                                }
                                if (foundUser.liveIn === match.liveIn) {
                                    count++;
                                }
                                if (foundUser.currently === match.currently) {
                                    count++;
                                }
                                if (foundUser.virgin === match.virgin) {
                                    count++;
                                }
                                if (foundUser.cook === match.cook) {
                                    count++;
                                }
                                if (foundUser.income === match.income) {
                                    count++;
                                }
                                var percentage = (count / total) * 100;
                                var x = {
                                    count: count,
                                    userData: match,
                                    percentage: percentage
                                };

                                array.push(x);
                                count = 0;

                            });

                        }
                    });
                } else if (foundUser.relPreference === "Homosexual") {
                    User.find({
                        _id: {
                            $ne: req.user
                        },
                        gender: "Male",
                        relType: foundUser.relType,
                        age: {
                            $range: [initialAge, finalAge]
                        }
                    }, function (data) {
                        data.forEach(function (match) {
                            if (foundUser.relDistance === "Long Distance Relationships") {
                                if (foundUser.city !== match.city) {
                                    count += 4;
                                }

                            } else if (foundUser.relDistance === "Short Distance Relationships") {
                                if (foundUser.city === match.city) {
                                    count += 4;
                                }

                            } else {
                                count += 4;
                            }
                            if (foundUser.maritalStatus === match.maritalStatus) {
                                count++;
                            }
                            if (foundUser.liveIn === match.liveIn) {
                                count++;
                            }
                            if (foundUser.currently === match.currently) {
                                count++;
                            }
                            if (foundUser.virgin === match.virgin) {
                                count++;
                            }
                            if (foundUser.cook === match.cook) {
                                count++;
                            }
                            if (foundUser.income === match.income) {
                                count++;
                            }
                            var percentage = (count / total) * 100;
                            var x = {
                                count: count,
                                userData: match,
                                percentage: percentage
                            };
                            array.push(x);
                            count = 0;

                        });

                    });

                } else {
                    User.find({
                        _id: {
                            $ne: req.user
                        },
                        relType: foundUser.relType,
                        age: {
                            $range: [initialAge, finalAge]
                        }
                    }, function (data) {
                        data.forEach(function (match) {
                            if (foundUser.relDistance === "Long Distance Relationships") {
                                if (foundUser.city !== match.city) {
                                    count += 4;
                                }

                            } else if (foundUser.relDistance === "Short Distance Relationships") {
                                if (foundUser.city === match.city) {
                                    count += 4;
                                }

                            } else {
                                count += 4;
                            }
                            if (foundUser.maritalStatus === match.maritalStatus) {
                                count++;
                            }
                            if (foundUser.liveIn === match.liveIn) {
                                count++;
                            }
                            if (foundUser.currently === match.currently) {
                                count++;
                            }
                            if (foundUser.virgin === match.virgin) {
                                count++;
                            }
                            if (foundUser.cook === match.cook) {
                                count++;
                            }
                            if (foundUser.income === match.income) {
                                count++;
                            }
                            var percentage = (count / total) * 100;
                            var x = {
                                count: count,
                                userData: match,
                                percentage: percentage
                            };
                            array.push(x);
                            count = 0;

                        });

                    });

                }



            }
            //Others gender
            else {

                User.find({
                    _id: {
                        $ne: req.user
                    },
                    relType: foundUser.relType,
                    age: {
                        $range: [initialAge, finalAge]
                    }
                }, function (data) {
                    data.forEach(function (match) {
                        if (foundUser.relDistance === "Long Distance Relationships") {
                            if (foundUser.city !== match.city) {
                                count += 4;
                            }

                        } else if (foundUser.relDistance === "Short Distance Relationships") {
                            if (foundUser.city === match.city) {
                                count += 4;
                            }

                        } else {
                            count += 4;
                        }
                        if (foundUser.maritalStatus === match.maritalStatus) {
                            count++;
                        }
                        if (foundUser.liveIn === match.liveIn) {
                            count++;
                        }
                        if (foundUser.currently === match.currently) {
                            count++;
                        }
                        if (foundUser.virgin === match.virgin) {
                            count++;
                        }
                        if (foundUser.cook === match.cook) {
                            count++;
                        }
                        if (foundUser.income === match.income) {
                            count++;
                        }
                        var percentage = (count / total) * 100;
                        var x = {
                            count: count,
                            userData: match,
                            percentage: percentage
                        };
                        array.push(x);
                        count = 0;

                    });

                });
            }
            for (var i = 1; i < array.length; i++) {
                for (var j = 0; j < n - i; j++) {
                    if (array[j].count < array[j + 1].count) {
                        var temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;

                    }
                }

            }
            res.render('home', {
                data: array
            });


        }
    })
});
