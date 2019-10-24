import { Component } from '@angular/core';
import { Sensor } from './shared/models/sensor.model';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  sensors: Sensor[] = [];
  constructor() {
    for(let i=0; i < 10; i++) {
      this.sensors.push(new Sensor(i, `Датчик ${i}`));  
    }
  }

  onDeleteSensor(idx: number) {
    this.sensors.splice(idx, 1);
  }

  onCreateSensor(new_name, new_status) {
    this.sensors.push(new Sensor(this.sensors.length, new_name.value, new_status.checked)); 
  }
}

