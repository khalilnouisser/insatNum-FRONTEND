import {Injectable} from '@angular/core';
//import {Http, Headers} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable()
export class GenericHttp {

    constructor(private http: HttpClient) {}

    createAuthorizationHeader(headers: Headers) {
        headers.append('Content-Type', 'application/json');
        /*if (this.authService.isUserLoggedIn())
            headers.append('Authorization', 'Bearer ' + this.authService.getCurrentUser().token);*/
    }
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })
    };

    get(url) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, this.httpOptions);
    }

    post(url, data) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, this.httpOptions);
    }

    delete(url) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.delete(url, this.httpOptions);
    }

    putData(url, data) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.put(url, data, this.httpOptions);
    }

    put(url) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.put(url, this.httpOptions);
    }


}

