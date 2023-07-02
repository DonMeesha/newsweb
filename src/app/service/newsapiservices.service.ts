import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }

  //newsapiurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=129742b33cf945279611188789b1d6a5";

  //techapiurl
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=129742b33cf945279611188789b1d6a5";

  //businessurl
  businessUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=129742b33cf945279611188789b1d6a5";

  //entertainmenturl
  entertainmentUrl = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=129742b33cf945279611188789b1d6a5";

  //sportsurl
  sportsUrl ="https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=129742b33cf945279611188789b1d6a5";

  //healthurl
  healthUrl = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=129742b33cf945279611188789b1d6a5";


  //topheading()
  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  //technews()
  technews() : Observable<any>{
    return this._http.get(this.techApiUrl);
  }

  //businessnews()
  businessnews(): Observable<any>{
    return this._http.get(this.businessUrl);
  }

  //entertainmentnews()
  entertainmentnews(): Observable<any>{
    return this._http.get(this.entertainmentUrl);
  }

  //sportsnews()
  sportsnews() :Observable<any>{
    return this._http.get(this.sportsUrl);
  }

  //healthnews()
  healthnews() :Observable<any>{
    return this._http.get(this.healthUrl);
  }



}
