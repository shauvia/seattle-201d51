'use strict';

var ctx = document.getElementById('chart').getContext('2d');

var allTheData = [
  {
    name: "John",
    clicks: 17,
    views: 100,
  },
  {
    name: "Cathy",
    clicks: 21,
    views: 77,
  },
  {
    name: "Zach",
    clicks: 13,
    views: 111,
  },
  {
    name: "Allie",
    clicks: 54,
    views: 71,
  },
];

var labels = [];
var data = [];
var colors = ['black', 'ivory', 'blue', 'red'];

for (var i = 0; i < allTheData.length; i++) {
  labels.push(allTheData[i].name);
  data.push(allTheData[i].clicks);
  // generate a random color and push it?
}

makeChart(data, labels);

function makeChart(data, labels) {

  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
      labels: labels,
      datasets: [{
        label: 'The Cokos Family Popularity Contest',
        backgroundColor: colors,
        borderColor: 'rgb(255, 99, 132)',
        data: data,
      }]
    },

    // Configuration options go here
    options: {}
  });

}