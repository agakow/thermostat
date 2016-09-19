function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MIN_TEMPERATURE = 10;
  this.MAX_TEMPERATURE_POWERSAVERON = 25;
  this.MAX_TEMPERATURE_POWERSAVEROFF = 32;
  this.MAX_TEMPERATURE = this.MAX_TEMPERATURE_POWERSAVERON;
  this.MEDIUM_ENERGY_MIN = 18;
  this.powerSaving = true;
}

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function(){
  if(this.temperature === this.MAX_TEMPERATURE) {
    throw new Error('Maximum temperature reached');
  }
  this.temperature++;
};

Thermostat.prototype.down = function(){
  if(this.temperature === this.MIN_TEMPERATURE) {
    throw new Error('Minimum temperature reached');
  }
  this.temperature--;
};

Thermostat.prototype.powerSavingOff = function(){
    this.MAX_TEMPERATURE = this.MAX_TEMPERATURE_POWERSAVEROFF;
    this.powerSaving = false;
};

Thermostat.prototype.powerSavingOn = function(){
    this.MAX_TEMPERATURE = this.MAX_TEMPERATURE_POWERSAVERON;
    this.powerSaving = true;
    if(this.temperature > this.MAX_TEMPERATURE_POWERSAVERON) {
      this.temperature = this.MAX_TEMPERATURE_POWERSAVERON;
    }
    
};

Thermostat.prototype.reset = function(){
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function(){
  if(this.temperature < this.MEDIUM_ENERGY_MIN) {
    return 'low-usage';
  }
  if(this.temperature >= this.MEDIUM_ENERGY_MIN && this.temperature <= this.MAX_TEMPERATURE_POWERSAVERON) {
    return 'medium-usage';
  }
    return 'high-usage';
};
