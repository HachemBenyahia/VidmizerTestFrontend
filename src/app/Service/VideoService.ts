import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Video } from "@App/Entity/Video";

@Injectable({
    providedIn: "root"
})
export class VideoService
{
    headers1: HttpHeaders;
    readonly API_URL: String = "http://127.0.0.1:8000/api/videos";

    public constructor(private http: HttpClient)
    {
        this.headers1 = new HttpHeaders({
            "Content-Type": "application/json;charset=UTF-8",
        });
    }

    public get(id?: number)
    {
        let response: any;

        if (id == undefined) {
            console.log("[GET] endpoint: " + `${this.API_URL}`);

            response = this.http.get<Video[]>(`${this.API_URL}`, {headers: this.headers1});
        }
        else if (id >= 0) {
            console.log("[GET] endpoint: " + `${this.API_URL}/${id}`);
            response = this.http.get<Video>(`${this.API_URL}/${id}`, {headers: this.headers1});
                // .pipe(map(response => {
                //     console.log(response);
                //     // response as User
                // }));
        }
        else {
            throw new Error("VideoService.get(id) expects an id as integer > 0");
        }

        return response;
    }
    //
    // public post(user: User)
    // {
    //     let response: any;
    //
    //     console.log("[POST] endpoint: " + `${this.API_URL}`);
    //     response = this.http.post<User>(`${this.API_URL}`, user.serialize(), {headers: this.headers1});
    //
    //     return response;
    // }
}
