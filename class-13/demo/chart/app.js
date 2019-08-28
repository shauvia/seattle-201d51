'use strict';

var ctx = document.getElementById('chart').getContext('2d');

var allTheData = [
  {
    name: "John",
  },
  {
    name: "Cathy",
  },
  {
    name: "Zach",
  },
  {
    name: "Allie",
  },
];


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

function readData() {
  var clicks = JSON.parse(localStorage.getItem('clicks'));
  var views = JSON.parse(localStorage.getItem('views'));

  for (var i = 0; i < allTheData.length; i++) {
    allTheData[i].clicks = clicks[i];
    allTheData[i].views = views[i];

  }

  console.log(allTheData);

}

function saveData() {
  var clicks = [];
  var views = [];
  for (var i = 0; i < allTheData.length; i++) {
    clicks.push(allTheData[i].clicks + 1);
    views.push(allTheData[i].views + 1);
  }

  localStorage.setItem('clicks', JSON.stringify(clicks));
  localStorage.setItem('views', JSON.stringify(views));

}

readData();
saveData();

var labels = [];
var data = [];
var colors = ['black', 'ivory', 'blue', 'red'];

for (var i = 0; i < allTheData.length; i++) {
  labels.push(allTheData[i].name);
  data.push(allTheData[i].clicks);
}


makeChart(data, labels);