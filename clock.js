// function clock(){
//     var clockElem = document.getElementById('clock')


//     var date = new Date()
//     var hours = date.getHours()

//     console.log(hours)

//     var am_pm = "AM"

//     if (hours > 12) {
//         hours = hours - 12;
//         am_pm  = "pm"
//     }
    
//     if(hours < 10){
//         hours = "0" + hours
//     }

// var minutes = date.getMinutes()
// var seconds = date.getSeconds()

// if (minutes < 10) {
//     minutes = "0" + minutes
// }

// if (seconds < 10) {
//     seconds = "0" + seconds
    
// }

// //  clockElem.textContent = '${hours}: ${minutes}: ${seconds} ${am_pm}'

// }


// setInterval(clock,1000)

// clock()



function clock() {
    var clockElem = document.getElementById('clock');

    var date = new Date();
    var hours = date.getHours();

    var am_pm = "AM";

    if (hours >= 12) {
        // am_pm = "PM";
        if (hours > 12) {
            hours -= 12;
        }
    } else if (hours === 0) {
        hours = 12; // Display midnight as 12:00 AM
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    clockElem.textContent = `${hours}:${minutes}:${seconds} ${am_pm}`;
}

setInterval(clock, 1000);
clock();
