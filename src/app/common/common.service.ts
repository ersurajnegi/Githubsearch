import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions, Response} from '@angular/http';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class GitHubApiService{
    private _baseApi: string = 'https://api.github.com/users';

    constructor(private _http: Http){

    }
    public getGitHubUserList ():Observable<any[]>{
        return this._http.get(this._baseApi).map(this._processResult).catch(this._handleError)
    }
    private _processResult(result: any){
        return JSON.parse(result._body) || {};
    }

    private _handleError(error:any){
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}