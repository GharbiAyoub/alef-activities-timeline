$(".mygantt").dhx_gantt({
  data: {
        "data":activities,
        "links": links
      },
});

gantt.config.readonly = true;
gantt.config.columns = [
  {
    name: "text",
    label: "Activity name",
    tree: true,
    width: "*",
    resize: true,
  },
  { name: "start_date", label: "Start time", align: "center", width: 90 },
  { name: "end_date", label: "End date", align: "center", width: 90 },
  { name: "duration", label: "Duration", align: "center", width: 50 },
];

gantt.init("gantt_here");