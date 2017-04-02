(function(document, window) {
    "use strict"

    var defaults = {
        lecturer: "zjshao",
    };

    // HELPER FUNCITONS
    // `prefixInterger` add prefix to a number, e.g. '9' -> '09'.
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
        };

        // Add prefix.
        for (var p in d) {
            if (d.hasOwnProperty(p) && p !== "year") {
                d[p] = prefixInteger(d[p], 2);
            }
        }

        return d.year + "-" + d.month + "-" + d.day + " " + d.hour + ":" + d.min + ":" + d.sec
    };

    // `updateDate` update the date DOM in title step.
    var updateDate = function() {
        var date = document.querySelector("#title .date");
        if (date) { date.innerText = getDate(); }

        setTimeout(updateDate, 1000);
    };

    // `initLecturerInfo` initialize the information of lecturer in title step.
    var initLectureInfo = function() {
        var title = document.querySelector('#title ul');
        if (!title) { return; }

        var lecturer_nodes = [];

        // lecturer name.
        var name = document.createElement('li');
        name.className += "list-item";
        name.innerText = lecturer.name;
        lecturer_nodes.push(name);

        // lecturer homepage.
        var homepage = document.createElement('li');
        homepage.className = "list-item";
        homepage.innerHTML = "<a href='" + lecturer.homepage + "'>" + lecturer.homepage + "</a>";
        lecturer_nodes.push(homepage);

        // date.
        var date = document.createElement('li');
        date.className = "list-item date";
        lecturer_nodes.push(date);

        for (var i = 0; i < lecturer_nodes.length; ++i) {
            title.appendChild(lecturer_nodes[i]);
        }

        updateDate();
    };

    // Interfaces for presentation.js
    var presentation = window.presentation = function() {
        var init = function() {
            initLectureInfo();
        };

        return {init: init};
    };

})(document, window);

