import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkoutService{
    http: any;
    apiKey: String;
    workoutsUrl: String;

    constructor(http:Http){
        this.http = http;
        this.apiKey = 'Q_14EqpHdkZiYfR1bsZRGtH3QG1f_XzR';
        this.workoutsUrl = 'https://api.mlab.com/api/1/databases/myworkouts/collections/workouts';
    }


    getWorkouts(){
        return this.http.get(this.workoutsUrl +'?apiKey='+ this.apiKey)
            .map(res => res.json());
    }

}