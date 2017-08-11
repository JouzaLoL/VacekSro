function update_open_status() {
    var d = new Date();

    var n = d.getDay();

    var now = d.getHours() + "." + d.getMinutes();

    var weekdays = [
        ["Monday", 6.00, 12.00, 12.30, 16.00],
        ["Tuesday", 6.00, 12.00, 12.30, 16.00],
        ["Wednesday", 6.00, 12.00, 12.30, 16.00],
        ["Thursday", 6.00, 12.00, 12.30, 16.00],
        ["Friday", 6.00, 12.00, 12.30, 16.00],
        ["Saturday", 7.00, 11.00],
        ["Sunday"]
    ];

    var weekdays_zimni = [
        ["Monday", 7.00, 12.00, 12.30, 16.00],
        ["Tuesday", 7.00, 12.00, 12.30, 16.00],
        ["Wednesday", 7.00, 12.00, 12.30, 16.00],
        ["Thursday", 7.00, 12.00, 12.30, 16.00],
        ["Friday", 7.00, 12.00, 12.30, 16.00],
        ["Saturday"],
        ["Sunday"]
    ];

    var day = new Array();

    if (d.getMonth() === 11 || d.getMonth() <= 1) {
        day = weekdays_zimni[n];
    } else {
        day = weekdays[n];
    }

    var indicator = document.getElementById("open-indicator");


    if ((now > day[1] && now < day[2]) || (now > day[3] && now < day[4])) {
        indicator.innerHTML = "OTEVŘENO";
        indicator.style.color = "green";
    } else {
        indicator.innerHTML = "ZAVŘENO";
        indicator.style.color = "red";
    }
}
