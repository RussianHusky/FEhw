function showTime()
{
  var date = new Date();
  
  var time = [date.getHours(),date.getMinutes(),date.getSeconds()];
  var dayOfWeek = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"]
  var days = date.getDay();
  var daycal = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  
  if(time[0] < 10){time[0] = "0"+ time[0];}
  if(time[1] < 10){time[1] = "0"+ time[1];}
  if(time[2] < 10){time[2] = "0"+ time[2];}
  
  var current_time = [time[0],time[1],time[2]].join(':');
  var current_date = [daycal, month + 1, year].join('.')
  var clock = document.getElementById("clock");
  var day = document.getElementById("dayOfWeek");
  var data = document.getElementById("date")
  
  clock.innerHTML = current_time;
  day.innerHTML = dayOfWeek[days];
  data.innerHTML = current_date;

  setTimeout("showTime()", 1000);
}