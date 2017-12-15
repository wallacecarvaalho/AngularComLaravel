import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

interface Options{
    limit?:number;
}

@Injectable()
export class AppHttpService{

    private url:string;
    private header:Headers;

    constructor(private http:Http){
        this.setAccessToken();
    }


    setAccessToken(){
        let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImJhNWNhZDdiM2IwZjNkNzAxZDQ2Mzg0OTA5YTQyMDI0MDFkNDdhMmUxYzVhZTUyOGE2NTkxZTRhNzcxYmU0NWQwZjBlZDkzM2ViMzhjMDhjIn0.eyJhdWQiOiIyIiwianRpIjoiYmE1Y2FkN2IzYjBmM2Q3MDFkNDYzODQ5MDlhNDIwMjQwMWQ0N2EyZTFjNWFlNTI4YTY1OTFlNGE3NzFiZTQ1ZDBmMGVkOTMzZWIzOGMwOGMiLCJpYXQiOjE1MTMxMDI5MDYsIm5iZiI6MTUxMzEwMjkwNiwiZXhwIjoxNTE1Njk0OTA1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.DN9uLN687jCSKBRB6xVxzrCqPapqgkyHVymmvR10Gg6BfYHBCrQOWvbgDDfbVTMR43TFOcTuqSNy0E-1wO7wzyjLrajc6Dv0wFO_5Nna8EWkZEyW9RJkAVl1Qhdo6fSgCX_wYRPm5TWcqD8ZmPtueiIdJeHUkRzYkrUNuv2OANJAWNppQ4pz2cQWCHCAG2kjdP_DYDlxnYvx-bVvQm9VAqUqZKEM-JS_HqZ698nce78WXidpk_B7uTeGZTJY_f6hS_krT4scZC3jPJGtE7uRy6tJZKQv3DhHDO_KuraxtsffTp_dmlJdiGI11-f1aKshs2z6ordoautWqJ7OKOj3wrGMj5gLFqWcfBIOfedOwgvNMi35TWDwpV6WbqGHDtWPYUg12Cuz7ItnjXxKMKvx8PYa-Cwmkn8kQhM0NbcJZQ3CmS_xySL0yL7OzN6VKX-BnqXfCa3qLpAkyDVDIJsqD9okfP4iMiLkmrcChsgmUaeXIrDArrkvhEsyr-I3CTUQBPmUwD-PlEFrg_5y8SCvqyh-XqbK4yildrVoy2Nu33FhGkE2AsEyhxG0zkAp3WlbQY3Ihm0WTBEgAS7Pa3LCK_18CAVSQYP8c1vsfkGFhrl0RR2S3NBuHRBQYUDitHxbyX8iYHwTPhgLRts7hS-Skr8JEJodyyneALfhIRL82T8';
        this.header = new Headers({'Authorization':'Bearer ' +token});
    }

    builder(resource:string){
        this.url = 'http://localhost:8000/api/'+ resource;
        return this;
    }

    list(options :Options = {}){
       
       return this.http.get(this.url,{headers:this.header})
        .toPromise()
        .then((res) => {
            return res.json() || {};
        });
    }
    view(id:number){
        return this.http.get(this.url +'/'+id,{headers:this.header})
        .toPromise()
        .then((res) => {
            return res.json() || {};
        });
    }
    update(id:number, data:Object){
        return this.http.put(this.url +'/'+id,data,{headers:this.header})
        .toPromise()
        .then((res) => {
            return res.json() || {};
        });
    }
    insert(data:Object){
        return this.http.post(this.url,data,{headers:this.header})
        .toPromise()
        .then((res) => {
            return res.json() || {};
        });
    }

    delete(id:number){
        return this.http.delete(this.url +'/'+id,{headers:this.header})
        .toPromise()
        .then((res) => {
            return res.json() || {};
        });
    }
    

}