$(document).ready(function () {
    // password matcher
    $("#confirmPassword").on("keyup", function () {
        let pass = $("#password").val();
        let confirmPass = $("#confirmPassword").val();
        if (pass == '') {
            $("#message").html("Password can't be empty").css("color", "red");
        } else {
            if (pass == confirmPass) {
                $("#message").html("Passwords matched!").css("color", "green");
            } else {
                $("#message").html("Passwords didn't match").css("color", "red");
            }
        }
    });

    $("#password").on("keyup", function () {
        let pass = $("#password").val();
        let confirmPass = $("#confirmPassword").val();
        if (confirmPass != '') {
            if (pass == confirmPass) {
                $("#message").html("Passwords matched!").css("color", "green");
            } else {
                $("#message").html("Passwords didn't match").css("color", "red");
            }
        }
    });

    // table row color changer
    $("#color-even").click(function () {
        $("#color-table tr:even").css("background-color", "DodgerBlue");
    });
    $("#color-odd").click(function () {
        $("#color-table tr:odd").css("background-color", "LightGrey");
    })

    // empty fields
    $("#emptyFieldsBtn").click(function () {
        let fName = $("#firstName").val();
        let lName = $("#lastName").val();
        if (fName == '') {
            $("#firstName").css("background-color", "red");
            alert("First Name can't be empty");
        } else if (lName == '') {
            $("#firstName").css("background-color", "white");
            $("#lastName").css("background-color", "red");
            alert("Last Name can't be empty")
        } else {
            $("#lastName").css("background-color", "white");
        }
    });

    // dynamic form generation
    $("#dynForm-add").click(function () {
        $("#dynForm-form").clone("dynForm-form").appendTo(".dynForm");
    })

    $("#dynForm-remove").click(function () {
        $("#dynForm-form").remove();
    })

    // event with time in jQuery
    function changeColor(count) {
        setTimeout(function () {
            if (count & 1) {
                $(".test p:first-child, p:last-child").css("background-color", "red");
            } else {
                $(".test p:first-child, p:last-child").css("background-color", "green");
            }
            changeColor(count ^= 1);
        }, 5000);
    }
    changeColor(1);

    // image gallery
    let images = ["./img/2.jpg", "./img/3.jpg", "./img/4.jpg", "./img/5.jpg", "./img/1.jpeg"];
    let count = 0;
    let n = images.length;
    $("#iGallery-prev").click(function () {
        $("#imageGallery-show").attr("src", images[count % n]);
        count--;
        if (count <= 0) {
            count = n;
        }
    });
    $("#iGallery-next").click(function () {
        count++;
        $("#imageGallery-show").attr("src", images[count % n]);
    });

    // live search
    let flowers = ["lily", "rose", "tulip", "orchid", "flower", "flow", "tulips", "tolo"];
    $("#liveSearch-text").keyup(function () {
        let curr_text = $("#liveSearch-text").val().toLowerCase();
        let res = "Suggestions : ";
        flowers.forEach(x => {
            if (x.substr(0, curr_text.length) == curr_text) {
                res += ` ${x} ,`;
            }
        });
        res = res.slice(0, -1);
        $("#live-search").html(res);
    });

    // dynamic content
    const bags = {"small" : 1000,
                  "medium" : 2000,
                  "large" : 3000,                
                };
    const shirt = {"gray" : 1200,
                   "black" : 1500,
                   "blue" : 1700,                
                };
            
    $("#bag").click(function() {
        let size = $(this).val();
        let price = bags[size];
        $("#duffleBag").html(price);
    });

    $("#t-shirt").click(function(){
        let color = $(this).val();
        let price = shirt[color];
        $("#tShirt").html(price);
    });


    // 9. Simple Event
    $("#simpleEvent-popup").click(function () {
        alert("Paragraph clicked");
    });

    // 10. dynamic list generation
    $(".subtask10__add").click(function() {
        $(this).parent().clone(true).appendTo($(this).parent().parent())
    })
});