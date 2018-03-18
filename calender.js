monthNames = ["January", "Feburay", "March", "April", "May", "June", "July", "August", "September", "Octobor", "November", "December"];
daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
currentView = 0;
monthView = 0;
weekView = 1;
dayView = 2;
currentMonth = new Date().getMonth();
currentYear = new Date().getFullYear();
currentActive = new Date().getDate();
weekNames = ["Sun", "Mon", "Tue", "Wes", "Thu", "Fri", "Sat"];

eventsData = {};
currentIndex = -1;
eventsData[currentYear * 10000 + currentMonth * 100 + parseInt(currentActive)] = [{title: "Study Plan1", description: "Finish HTML"}, {title: "Study Plan2", description: "Learn XML"}];
eventsData[currentYear * 10000 + currentMonth * 100 + parseInt(currentActive) + 2] = [{title: "Study Plan3", description: "Learn XML"}, {title: "Project1", description: "Build a website"}];
eventsData[currentYear * 10000 + currentMonth * 100 + parseInt(currentActive) + 5] = [{title: "Study Plan4", description: "Watch the vedio"}];

function haveEvent(year, month, day) {
  eventID = currentYear * 10000 + currentMonth * 100 + parseInt(day);
  return !(eventsData[eventID] === undefined);
}
function saveEvent() {
  eventID = currentYear * 10000 + currentMonth * 100 + parseInt(currentActive);
  if (eventsData[eventID] === undefined)
    eventsData[eventID] = [];
  eventData = eventsData[eventID];
  form_title = document.getElementById("title").value;
  form_description = document.getElementById("description").value;
  if (form_title === undefined || form_title === "") {
    alert("You must input the title");
    return false;
  }
  if (form_description === undefined || form_description === "") {
    alert("You must input the content");
    return false;
  }
  if (currentIndex < 0) {
    eventsData[eventID].push({title: form_title, description: form_description});
  } else {
    eventsData[eventID][currentIndex].title = form_title;
    eventsData[eventID][currentIndex].description = form_description;
  }
  renderEvent();
  render(currentMonth, currentYear, parseInt(currentActive));
  $("#eventForm").modal('toggle');
}
function editEvent(index) {
  currentIndex = index;
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  if (index < 0) {
    $("#eventForm").modal();
    return;
  }
  eventID = currentYear * 10000 + currentMonth * 100 + parseInt(currentActive);
  eventData = eventsData[eventID];
  document.getElementById("title").value = eventData[index].title;
  document.getElementById("description").value = eventData[index].description;
  $("#eventForm").modal();
}

function renderEvent() {
  eventID = currentYear * 10000 + currentMonth * 100 + parseInt(currentActive);
  eventData = eventsData[eventID];
  res = "";
  if (eventData != undefined) {
    
    for (var i = 0; i < eventData.length; i++) {
      res += "<div class=\"event\" type=\"button\" onClick=\"editEvent(" + i + ")\">";
      res += "<div class=\"row\"><div class=\"col-md-7 title\">" + eventData[i].title +"</div></div>";
      res += "<div class=\"row\"><div class=\"col-md-7 description\">" + eventData[i].description +"</div></div>";
      res += "</div>"
    }
  }
  res += "<div class=\"event\" type=\"button\" onClick=\"editEvent(-1)\">";
  res += "<div class=\"row\"><div class=\"col-md-7 title\"><span>New</span></div></div>";
  res += "<div class=\"row\"><div class=\"col-md-7 description\"><span></span></div></div>";     
  document.getElementById("events").innerHTML = res;
}


function leapYear(year) {
  return year % 100 == 0 || year % 4 == 0; 
}


function becomeActive(item) {
  currentActive = item.getAttribute("id").split("_")[1];
  renderEvent();
  render(currentMonth, currentYear, parseInt(currentActive));
}


function render(month, year, cActive) {
  calendar = [];
  isSame = month === new Date().getMonth() && year === new Date().getFullYear();
  currentActive = (cActive != undefined ? cActive : (isSame? new Date().getDate() : 1)); 
  daysOfMonth[1] = 28;
  if (leapYear(year))
    daysOfMonth[1] = 29;
  startDay = new Date(year, month, 1).getDay();
  dayIndex = 1;
  res = "<div class=\"row\"><div class=\"col-md-1 weekdays\">" + weekNames.join("</div><div class=\"col-md-1 weekdays\">") + "</div></div>";
  var i;
  for (i = 0; i < startDay + daysOfMonth[month]; i++) {
    if (i < startDay) {
      calendar.push("");
    } else {
      calendar.push(i + 1 - startDay);
    }
  }
  while (i % 7) {
    calendar.push("");
    i++;
  }

  i = 0;
  while (i < calendar.length) {
    res += "<div class=\"row\">";
    for (j = 0; j < 7; j++) {
      if (calendar[i + j] === "")
        res += "<div id=\"col_" + calendar[i + j] + "\" class=\"col-md-1\">" + calendar[i + j] + "</div>";
      else {
        className = "col-md-1";
        if (calendar[i + j] === currentActive)
          className += " active";
        else if (haveEvent(year, month, i + j - startDay + 1))
          className += " bg-info text-white";
        res += "<div id=\"col_" + calendar[i + j] + "\" class=\"" + className + "\"  onClick=\"becomeActive(this)\">" + calendar[i + j] + "</div>"; 
      }    
    }
    res += "</div>";
    i += 7;
  }

  document.getElementById("days").innerHTML = res;
  document.getElementById("month-name").innerHTML = monthNames[month];
  document.getElementById("year-name").innerHTML = year;
}
function switchCalendar(next, month, year) {   
  month = month || ((next) ? ((currentMonth + 1) % 12) : ((currentMonth + 11) % 12)); 
  year = year || ((next && month === 0) ? currentYear + 1 : (!next && month === 11) ? currentYear - 1 : currentYear);
  currentMonth = month;
  currentYear = year;
  render(month, year);
  renderEvent();
}

function calendarInit() {

  document.getElementById("prev").setAttribute("onClick", "switchCalendar(false)");
  document.getElementById("next").setAttribute("onClick", "switchCalendar(true)");
  currentMonth = new Date().getMonth();
  currentYear = new Date().getFullYear();
  switchCalendar(null, currentMonth, currentYear);

}
function goBack() {
    window.history.back();
}