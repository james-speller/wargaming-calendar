var calendarInstance = calendarJs( "calendar", {
    manualEditingEnabled: false,
    exportEventsEnabled: false,
    showExtraToolbarButtons: false,
    events: [
      {
        from: new Date("2023-06-11"),
        to: new Date("2023-06-11"),
        title: "The Ghallu Conquest - Phase Delta",
        description: "A description of the event",
        isAllDay: true
      },
      {
        from: new Date("2023-06-25"),
        to: new Date("2023-06-25"),
        title: "The Ghallu Conquest - Phase Delta (part 2)",
        description: "A description of the event",
        isAllDay: true
      }
    ]    
    // All your options can be set here
  } );


  