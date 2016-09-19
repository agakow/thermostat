$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powerSaving').click(function() {
    thermostat.powerSavingOn();
    updateTemperature();
  });

  $('#powersaving').click(function() {
    if($('#powersaving').prop('checked')) {
        thermostat.powerSavingOn();
      } else {
        thermostat.powerSavingOff();
      }
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#box').attr('class', thermostat.energyUsage());
  }

  displayWeather('London');

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    displayWeather(city);
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=d75ec6b81962ab7e11c4de42e40aef35';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#temperature').text(Math.round(data.main.temp));
    });
  }
});
