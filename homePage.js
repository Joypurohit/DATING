require("dotenv/config");
var express = require("express");
var router = express.Router();
var User = require("../models/user");
var count=0;
 var array=[];
var popup=[];


//HOME PAGE ROUTE

router.get("/home/:id", function (req, res) {
    User.findById(req.params.id).populate('notification').exec( function (err, foundUser) {
        if (err) {
            console.log(err);
            req.flash("error", "Something went wrong!")
            return res.redirect("back")
        } else {
		if(currentUser.notification)
		{
	 
		popup=foundUser.notification;
	        foundUser.notification=null;
		foundUser.save();
		
		}
            //Female gender
            if (foundUser.gender === "Female") {
                console.log("female");
                if (foundUser.relPreference === "Straight") {
                    console.log("second if");
                    User.find({
                        _id: {
                            $ne: req.user
                        },
                        gender: "Male",
                        relType: foundUser.relType // Anything
                    }, function (err, data) {
                            console.log(data);
                        if (err) {
                            req.flash("error", "Something went wrong!")
                           return res.redirect("back")
                        }
                        array=matching(data,foundUser,count,array);
			   
                        res.render('home',{data:array,popup:popup});

                    });
                } else if (foundUser.relPreference === "Homosexual") {
                    User.find({
                        _id: {
                            $ne: req.user
                        },
                        gender: "Female",
                        relType: foundUser.relType
                    }, function (err, data) {
                        if (err) {
                            req.flash("error", "Something went wrong!")
                            return res.redirect("back")
                        }
                        array=matching(data,foundUser,count,array);
                        res.render('home',{data:array,popup:popup});

                    });

                } else {
                    User.find({
                        _id: {
                            $ne: req.user
                        },
                        relType: foundUser.relType
                    }, function (err, data) {
                        if (err) {
                            req.flash("error", "Something went wrong!")
                            return res.redirect("back")
                        }
                        array=matching(data,foundUser,count,array);
                        res.render('home',{data:array,popup:popup});

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
                        relType: foundUser.relType},function(err, data) {
                            console.log(data);
                            if (err) {
                                req.flash("error", "Something went wrong!")
                                return res.redirect("back")
                            }
                            array=matching(data,foundUser,count,array);
                            res.render('home',{data:array,popup:popup});

                        
                    });
                } else if (foundUser.relPreference === "Homosexual") {
                    User.find({
                        _id: {
                            $ne: req.user
                        },
                        gender: "Male",
                        relType: foundUser.relType
                    }, function (err, data) {
                        if (err) {
                            req.flash("error", "Something went wrong!")
                            return res.redirect("back")
                        }
                        array=matching(data,foundUser,count,array);
                        res.render('home',{data:array,popup:popup});

                    });

                } else {
                    User.find({
                        _id: {
                            $ne: req.user
                        },
                        relType: foundUser.relType,
                       
                    }, function (err, data) {
                        if (err) {
                            req.flash("error", "Something went wrong!")
                           return res.redirect("back")
                        }
                        array=matching(data,foundUser,count,array);
                        res.render('home',{data:array,popup:popup});
                        
                    });

                }



            }
            //Others gender
            else {
                cosole.log("other");
                User.find({
                    _id: {
                        $ne: req.user
                    },
                    relType: foundUser.relType,
                    
                }, function (err, data) {
                    if (err) {
                        req.flash("error", "Something went wrong!")
                        return res.redirect("back")
                    }
                    array=matching(data,foundUser,count,array);
                    res.render('home',{data:array,popup:popup});

                });
            }
        }
    })
});

function matching(data,foundUser,count,array){
    data.forEach(function (match) {
        if(foundUser.relInitialAge<=match.age && foundUser.relFinalAge>=match.age )
        {
            
            if (foundUser.relDistance === "Long Distance Relationships") {
                if (foundUser.city !== match.city) {
                    count += 4;
                }
    
            } else if (foundUser.relDistance === "Short Distance Relationships") {
                if (foundUser.city === match.city) {
                    count += 4;
                }
    
            } else if(foundUser.relDistance==="Anything Will Do") {
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
            var percentage = (count /14) * 100;
            var x = {
                count: count,
                userData: match,
                percentage: percentage
            };
            array.push(x);
            count = 0;
        }
    });        
    var n=array.length;
            for (var i = 1; i<n; i++) {
                for (var j = 0; j < n - i; j++) {
                    if (array[j].count < array[j + 1].count) {
                        var temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;

                    }
                }

            }
    return array;


}
module.exports = router
