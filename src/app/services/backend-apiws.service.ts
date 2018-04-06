import {Injectable} from '@angular/core';
import {GenericHttp} from './generic-http.service';
import {RequestEquipement} from '../request-equipement/request-equipement.component';
const APIURL = 'https://vynd-business-api-vynd-business-api-dev.azurewebsites.net';

@Injectable()
export class BackendApiwsService {

    constructor(private http: GenericHttp) {
    }

    listEvents(limit:number){
        let url = APIURL+'/Event/All?limit='+limit;
        return this.http
            .get(url)
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        errMsg = error.message ? error.message : error.toString();
        console.error(errMsg);
        return Promise.reject(errMsg);
    }

}
