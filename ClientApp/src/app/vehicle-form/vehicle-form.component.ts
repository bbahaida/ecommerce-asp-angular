
import { VehiculeService } from './../services/vehicule.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  makes: Make[] = [];
  models: Model[] = [];
  features: Feature[] = [];
  vehicle: any = {};
  constructor(private vehiculeService: VehiculeService) { }

  ngOnInit() {
    this.vehiculeService.getMakes().subscribe(makes => this.makes=[...makes]);
    this.vehiculeService.getFeatures().subscribe(features => this.features = [...features]);

  }

  onMakeChange(){
    const makeId = parseInt(this.vehicle.make);
      this.models = makeId > 0 ? [...this.makes.find(make => make.id === makeId).models] : [];
  }

}
export class Make {
  constructor(public id:number, public name: string, public models:Array<Model>){}
}
export class Model {
  constructor(public id:number, public name: string){}
}
export class Feature {
  constructor(public id:number, public name: string){}
}