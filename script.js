document.addEventListener("DOMContentLoaded", function(){


    const enterBtn = document.getElementById("enterBtn");

    const welcome = document.getElementById("welcome");

    const mainContent = document.getElementById("mainContent");

    const music = document.getElementById("bgMusic");





    // Open story + start music

    enterBtn.addEventListener("click", function(){


        welcome.style.display = "none";


        mainContent.style.display = "block";



        music.play().catch(function(){

            console.log("Music waiting for permission");

        });



        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });







    // Promise opening effect

    window.showPromise = function(element){


        const message = element.querySelector(".promise-text");



        if(message.style.display === "block"){


            message.style.display = "none";


        }

        else {


            message.style.display = "block";


        }


    };








    // Floating hearts

    function createHeart(){



        const heart = document.createElement("div");



        heart.innerHTML = "❤️";



        heart.style.position = "fixed";



        heart.style.left =
        Math.random() * 100 + "vw";



        heart.style.bottom = "-20px";



        heart.style.fontSize =
        (Math.random()*25 + 15) + "px";



        heart.style.animation =
        "float 6s linear";



        heart.style.zIndex = "999";



        document.querySelector(".hearts")
        .appendChild(heart);





        setTimeout(function(){


            heart.remove();


        },6000);



    }




    setInterval(createHeart,500);



});