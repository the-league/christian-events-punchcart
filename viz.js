// var svg = d3.select("svg");

// var circle = svg.selectAll("circle")
//     .data([32, 57]);

// // var circleEnter = circle.enter().append("circle");

// // circleEnter.style("fill", "steelblue");
// // circleEnter.attr("cy", 60);
// // circleEnter.attr("cx", function(d, i) { return i * 100 + 30});
// // circleEnter.attr("r", function(d) { return Math.sqrt(d); });

//   circle.enter().append("circle")
//     .attr("cy", 60)
//     .attr("cx", function(d, i) { return i * 100 + 30; })
//     .attr("r", function(d) { return Math.sqrt(d); });

// circle.exit().remove();

var rawData = ["2014/07/14","2014/07/13","2014/07/26","2014/07/26","2014/08/04","2014/10/10","2014/10/24","2014/07/26","2014/08/03","2014/11/24","2014/01/24","2014/09/21","2014/09/18","2014/11/27","2014/11/26","2014/11/08","2014/10/11","2014/09/01","2014/09/05","2014/09/26","2014/11/01","2014/09/11","2014/10/15","2014/11/08","2015/06/06","2014/08/11","2014/09/12","2015/03/20","2014/11/07","2014/08/02","2014/08/03","2014/10/10","2014/10/11","2014/10/17","2014/10/18","2014/10/24","2014/10/25","2014/11/21","2014/11/22","2014/11/07","2014/11/08","2014/11/14","2014/11/15","2014/11/21","2014/11/22","2014/11/28","2014/11/29","2014/08/21","2014/08/23","2014/08/24","2014/10/31","2014/11/01","2014/01/02","2014/08/30","2014/09/10","2014/10/22","2014/11/26","2014/12/17","2014/09/20","2014/09/07","2014/07/14","2014/07/21","2014/07/28","2014/08/04","2014/08/11","2014/08/18","2014/08/04","2014/08/11","2014/08/04","2014/08/05","2014/07/19","2014/09/08","2014/10/30","2014/08/16","2014/09/01","2014/09/05","2014/09/08","2014/09/19","2014/10/03","2014/10/17","2014/11/14","2015/02/20","2015/03/20","2015/03/25","2014/08/16","2014/08/18","2014/08/18","2014/08/19","2014/08/21","2014/08/22","2014/08/23","2014/08/27","2014/08/30","2014/12/27","2014/07/05","2014/08/20","2014/08/23","2014/09/30","2014/09/01","2014/09/01","2014/09/15","2014/09/01","2014/09/03","2014/09/04","2014/09/03","2014/09/03","2014/10/01","2014/11/20","2014/03/13","2014/03/08","2014/09/09","2014/11/25","2014/09/27","2014/09/20","2014/09/27","2014/03/22","2014/03/27","2014/03/28","2014/04/05","2014/10/24","2014/04/05","2014/04/12","2014/09/13","2014/10/11","2014/11/01","2014/12/13","2015/01/10","2014/10/04","2014/10/24","2014/10/31","2014/03/29","2014/09/13","2014/09/20","2014/10/03","2014/10/25","2014/11/28","2014/08/02","2014/11/29","2014/11/28","2015/03/28","2014/06/06","2014/04/04","2014/07/27","2014/04/05","2014/09/12","2014/09/13","2015/05/13","2015/07/18","2015/07/25","2015/08/01","2014/08/23","2014/10/04","2014/10/11","2014/10/04","2014/10/03","2014/10/04","2014/10/04","2014/10/04","2014/10/04","2014/10/04","2014/10/17","2014/12/26","2014/09/08","2014/09/19","2014/08/27","2014/09/03","2014/09/10","2014/09/09","2014/09/16","2014/09/23","2014/09/30","2014/09/10","2014/10/15","2014/11/12","2014/12/10","2014/09/17","2014/09/24","2014/10/01","2014/10/08","2014/10/01","2014/10/08","2014/10/15","2014/10/22","2014/10/02","2014/10/09","2014/10/16","2014/10/30","2014/10/09","2014/10/23","2014/11/06","2014/11/20","2014/10/09","2014/10/16","2014/10/23","2014/10/30","2014/10/15","2014/11/05","2014/11/12","2014/11/19","2014/10/21","2014/11/04","2014/11/11","2014/12/02","2014/10/24","2014/10/31","2014/11/21","2014/11/28","2014/08/27","2014/09/03","2014/09/10","2014/09/17","2014/09/24","2014/10/01","2014/10/08","2014/10/28","2014/10/29","2014/10/11","2014/09/13","2014/11/22","2014/09/05","2014/09/26","2014/10/24","2014/11/14","2014/09/11","2014/09/12","2014/09/16","2014/09/19","2014/09/22","2014/10/10","2014/11/28","2015/05/01","2014/10/16","2014/08/18","2014/09/05","2014/09/19","2014/09/26","2014/10/16","2014/04/12","2014/10/04","2014/10/31","2014/11/14","2014/05/10","2014/06/14","2014/10/01","2014/08/29","2014/08/30","2014/09/01","2014/09/02","2014/09/02","2014/09/03","2014/09/03","2014/09/03","2014/06/28","2014/04/12","2014/09/06","2014/09/06","2014/09/06","2014/09/06","2014/09/06","2014/09/07","2014/09/07","2014/09/08","2014/09/08","2014/09/08","2014/09/09","2014/09/09","2014/09/11","2014/09/13","2014/09/14","2014/09/14","2014/10/12","2014/11/09","2014/12/14","2014/09/15","2014/10/13","2014/11/17","2014/09/17","2014/09/17","2014/09/19","2014/09/2"];

// gets a number between 0-6 as argument, 0 represents sunday
// returns the name of the day
var returnDayName = function (dayNumber) {
  var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return dayNames[dayNumber];
}

// array containing all Date objects for every event
var data = [];

// looping through all the data, creating an object containing the date
for (var i = 0; i < rawData.length; i++) {
  // Converting datestring into Date object and pushing it into data[]
  var date = new Date(rawData[i]);
  data.push(date);
};

// create array for days containing freq in months
var freq = [];
for (var day = 0; day < 7; day++) {
  var monthfreq = [];
  for (var month = 0; month < 12; month++) {
    monthfreq.push(0);
  }
  freq.push(monthfreq);
}

// loop through data and count the days in the month
for (var i = 0; i < data.length; i++) {
  var day = data[i].getDay();
  var month = data[i].getMonth();

  freq[day][month]++;
}

var sunday = freq[0];

// Actual data visualisation
var svg = d3.select("#svg");


// var circle = svg.selectAll("circle")
//   .data(sunday);

// var circleEnter = circle.enter().append("circle");
//     circleEnter.style("fill", "steelblue");
//     circleEnter.attr("cy", 60);
//     circleEnter.attr("cx", function (d, i) { return i * 50 + 10 });
//     circleEnter.attr("r", function (d, i) { return d * 3; });

var g = svg.selectAll("svg")
    .data(freq)
  .enter().append("svg");

  g.attr("y", function(d, i) { return i * 60; });

var circle = g.selectAll("circles")
    .data(function(d, i) { return d; }) // d = freq[i]
  .enter().append("circle");

  circle.style("fill", "steelblue");
  circle.attr("cy", 60);
  circle.attr("cx", function (d, i) { return i * 50 + 10; });
  circle.attr("r", function (d, i) { return Math.sqrt(d)*4; });
    // circleEnter.style("fill", "steelblue");
    // circleEnter.attr("cy", 60);
    // circleEnter.attr("cx", function (d, i) { return i * 50 + 10 });
    // circleEnter.attr("r", function (d, i) { return d[0] * 3; });


// var circleEnter = circle.enter().append("circle");
//     circleEnter.style("fill", "steelblue");
//     for (var day = 0; day < freq.length; day++) {
//       circleEnter.attr("cy", day * 60 + 60);
//       for (var month = 0; month < freq[day].length; month++) {
//         circleEnter.attr("cx", month * 50 + 10); 
//         circleEnter.attr("r", function (d) { return d[day][month]});
//       }
//     };

// var circle = svg.selectAll("circle")
//     .data(data);

// var circleEnter = circle.enter().append("circle");
//     circleEnter.style("fill", "steelblue")
//     circleEnter.attr("cx", function (d, i) { return i * 50 + 10; });
//     circleEnter.attr("cy", function (d, i) { return 60 + d.getDay() * 60; });

