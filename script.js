$(document).ready(function() { 

    let button= $('.saveBtn');  //target save button
      
      $("#currentDay").text(moment().format("MMMM Do YYYY"));; //set the current date on the top of the planner
     
    const currentTime =moment().hours(); //set current time 
    
        //creat time funtion over all time blocks and style them according to the past, present & future 
      $(".timeBlock").each(function() { 
        let hour = parseInt($(this).attr('id')); 
          if (currentTime > hour) {
            $(this).children('.col-sm-10').attr('class', 'past col-sm-10 description'); //the rows turns into grey when the currentTime is greater than the hour
         
          }else if (hour === currentTime) {
            $(this).children('.col-sm-10').attr('class', 'present col-sm-10 description'); //the rows turns into red when the currentTime is greater than the hourif funtio
          
          }else {
            $(this).children('.col-sm-10').attr('class', 'future col-sm-10 description'); //the rows for the future will be green
          }
        })
     
        //set save buttons to events
        button. on('click',function(event){   
            event.preventDefault(); 
        
        let text = $(this).siblings(".description"). val();
        let parent = $(this).parent().attr ('id');
            localStorage.setItem(parent, JSON.stringify(text)); //set the values in local storage
        
        })
    
      //fetch data and display into the corresponding text rows
        let hour9 = localStorage.getItem("9AM");
            $("#9AM .description").val(hour9);
    
        let hour10 = localStorage.getItem("10AM");
            $("#10AM .description").val(hour10);
    
        let hour11 = localStorage.getItem("11AM");
            $("#11AM .description").val(hour11);
    
        let hour12 = localStorage.getItem("12PM");
            $("#12PM .description").val(hour12);
    
        let hour13 = localStorage.getItem("13PM");
            $("#13PM .description").val(hour13);
    
        let hour14 = localStorage.getItem("14PM");
            $("#14PM .description").val(hour14);
    
        let hour15 = localStorage.getItem("15PM");
            $("#15PM .description").val(hour15);
    
        let hour16 = localStorage.getItem("16PM");
            $("#16PM .description").val(hour16);
    
        let hour17 = localStorage.getItem("17PM");
            $("#17PM .description").val(hour17);
    
      //style for pointer while click event
             $('selector').css('cursor', 'i');
    
});