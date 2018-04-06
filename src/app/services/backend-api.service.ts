import {Injectable} from '@angular/core';
import {GenericHttp} from './generic-http.service';
import {RequestEquipement} from '../request-equipement/request-equipement.component';
const API_BASE_URL = 'http://localhost:5000/api/';

@Injectable()
export class BackendAPIService {

    constructor(private http: GenericHttp) {
    }

    listEquipment(keyword,limit,offset){
        let url = API_BASE_URL + 'Equipment';
        if(keyword.trim() != ""){
            url+='/filtre/'+keyword;
        }
        url+="?limit="+limit+"&offset="+offset;
        return this.http
            .get(url)
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }

    listUsers(keyword,limit,offset){
        let url = API_BASE_URL + 'Person/list';
        if(keyword.trim() != ""){
            url+='/filtre/'+keyword;
        }
        url+="?limit="+limit+"&offset="+offset;
        return this.http
            .get(url)
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }

    listEquipmentRequests(){
        let url = API_BASE_URL + 'Equipment/request';
        return this.http
            .get(url)
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }

    acceptEquipmentRequest(id){
        let url = API_BASE_URL + 'Equipment/accept/'+id;
        return this.http
            .put(url)
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }

    getPreShifting(id){
        let url = API_BASE_URL + 'Equipment/preshifting/list/'+id;
        return this.http
            .get(url)
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }

    refuseEquipmentRequest(id){
        let url = API_BASE_URL + 'Equipment/refuse/'+id;
        return this.http
            .put(url)
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }

    getEquipmentRequest(id){
        let url = API_BASE_URL + 'Equipment/request/'+id;
        return this.http
            .get(url)
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }

    getEquipmentById(id){
        let url = API_BASE_URL + 'Equipment/'+id;
        return this.http
            .get(url)
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }

    getAllPersons(){
        let url = API_BASE_URL + 'Person/list/';
        return this.http
            .get(url)
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }

    listEquipmentShifting(id){
        let url = API_BASE_URL + 'Equipment/shifting';
        if(id != 0) {
            url+="/"+id;
        }
        console.log(url);
        return this.http
            .get(url)
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }
    sendEquipmentRequest(request): Promise<any> {
        let url = API_BASE_URL + 'Equipment/request';
        return this.http
            .post(url, JSON.stringify(request))
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }

    addEquipment(request): Promise<any> {
        console.log(JSON.stringify(request));
        let url = API_BASE_URL + 'Equipment/';
        return this.http
            .post(url, JSON.stringify(request))
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }

    sendEquipment(request): Promise<any> {
        let url = API_BASE_URL + 'Equipment';
        return this.http
            .post(url, JSON.stringify(request))
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }

    removeEquipment(id): Promise<any> {
        let url = API_BASE_URL + 'Equipment/'+id;
        return this.http
            .delete(url)
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }

    editEquipment(request,id): Promise<any> {
        let url = API_BASE_URL + 'Equipment/'+id;
        return this.http
            .putData(url, JSON.stringify(request))
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }

    sendEquipmentShiftingRequest(request,id): Promise<any> {
        let url = API_BASE_URL + 'Equipment/shiftingRequest/'+id;
        return this.http
            .post(url, JSON.stringify(request))
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }
    sendEquipmentReceptionRequest(request,id): Promise<any> {
        let url = API_BASE_URL + 'Equipment/receptionRequest/'+id;
        return this.http
            .post(url, JSON.stringify(request))
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
