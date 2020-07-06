google.charts.load("current", { packages: ["gantt"] });
google.charts.setOnLoadCallback(drawChart);

function daysToMilliseconds(days) {
  return days * 24 * 60 * 60 * 1000;
}

function drawChart() {

  var connectTo=""
  var Rows = activities.map(a =>{
    var startDate = new Date(a.start_date.split("-").reverse().join("-"));
    var endDate = new Date(a.start_date.split("-").reverse().join("-"));
    endDate.setDate(endDate.getDate()+parseInt(a.duration));

    return [
      ""+a.id,
      a.text,
      null,
      startDate,
      endDate,
      null,
      a.progress * 100,
      null,
    ];
    
  })

  console.log(Rows[0])
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Task ID");
  data.addColumn("string", "Task Name");
  data.addColumn("string", "Resource");
  data.addColumn("date", "Start Date");
  data.addColumn("date", "End Date");
  data.addColumn("number", "Duration");
  data.addColumn("number", "Percent Complete");
  data.addColumn("string", "Dependencies");

  data.addRows(Rows)
  /* data.addRows([
    [
      "Research",
      "Find sources",
      null,
      new Date(2015, 0, 1),
      new Date(2015, 0, 5),
      null,
      100,
      null,
    ],
    [
      "Write",
      "Write paper",
      "write",
      null,
      new Date(2015, 0, 9),
      daysToMilliseconds(3),
      25,
      "Research,Outline",
    ],
    [
      "Cite",
      "Create bibliography",
      "write",
      null,
      new Date(2015, 0, 7),
      daysToMilliseconds(1),
      20,
      "Research",
    ],
    [
      "Complete",
      "Hand in paper",
      "complete",
      null,
      new Date(2015, 0, 10),
      daysToMilliseconds(1),
      0,
      "Cite,Write",
    ],
    [
      "Outline",
      "Outline paper",
      "write",
      null,
      new Date(2015, 0, 6),
      daysToMilliseconds(1),
      100,
      "Research",
    ],
  ]); */

  var options = {
    //height: 400,
    gantt: {
      trackHeight: 30,
      criticalPathEnabled: false, // Critical path arrows will be the same as other arrows.
      arrow: {
        angle: 100,
        width: 5,
        color: "green",
        radius: 0,
      },
    },
  };

  var chart = new google.visualization.Gantt(
    document.getElementById("chart_div")
  );

  chart.draw(data, options);

  $(window).on("resize", function(){
    google.charts.load("current", { packages: ["gantt"] });
    google.charts.setOnLoadCallback(drawChart);
  });
}
