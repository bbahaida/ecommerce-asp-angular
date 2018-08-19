import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

const MAKES_URL = '/api/makes';
const FEATURES_URL = '/api/features';


@Injectable()
export class VehiculeService {

  constructor(private http: Http) { }

  getMakes() {
    return this.http.get(MAKES_URL).map(res => res.json());
  }
  getFeatures(){
    return this.http.get(FEATURES_URL).map(res => res.json());
  }

}
