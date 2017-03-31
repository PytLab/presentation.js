(function(document, window) {
    var defaults = {
        lecturer: "zjshao",
    };

    // HELPER FUNCITONS
    var prefixInteger = function(n, width) {
        return (Array(width).join(0) + n).slice(-width);
    }

    // `getDate` returns the date string in format "yyyy-MM-dd hh:mm::ss".
    var getDate = function() {
        var date = new Date();

        var d = {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            hour: date.getHours(),
            min: date.getMinutes(),
            sec: date.getSeconds(),

            addPrefix: function() {
                for (p in this) {
                    if (p !== "year") { d[p] = prefixInteger(d[p], 2); }
                }
            },
        };

        d.addPrefix();

        return d.year + "-" + d.month + "-" + d.day + " " + d.hour + ":" + d.min + ":" + d.sec
    };

    // Change the hint.
    var lecturer_info = "<p>" + defaults.lecturer + "</p></br><p>" + getDate() + "</p>"
    document.querySelector(".hint").innerHTML = lecturer_info;

})(document, window);

