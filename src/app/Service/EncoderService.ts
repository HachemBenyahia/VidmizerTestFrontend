import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Encoder } from "@App/Entity/Encoder";

@Injectable({
    providedIn: "root"
})
export class EncoderService
{
    headers1: HttpHeaders;
    readonly API_URL: String = "http://127.0.0.1:8000/api/encoders";

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

            response = this.http.get<Encoder[]>(`${this.API_URL}`, {headers: this.headers1});
        }
        else if (id >= 0) {
            console.log("[GET] endpoint: " + `${this.API_URL}/${id}`);
            response = this.http.get<Encoder>(`${this.API_URL}/${id}`, {headers: this.headers1});
                // .pipe(map(response => {
                //     console.log(response);
                //     // response as User
                // }));
        }
        else {
            throw new Error("EncoderService.get(id) expects an id as integer > 0");
        }

        return response;
    }

    public getEncoderByVideo(idVideo?: number)
    {
        let response: any;

        // if (idVideo == undefined) {
        //     console.log("[GET] endpoint: " + `${this.API_URL}`);

            // Doesn't display, I don't know why. I wanted to show a list of the encoders in the table of videos (in a select)
            // and then select an encoder and display the new compressed size of the video after that encoder. Sorry, I couldn't
            // finish the exercise, but it wasn't because of a lack of of compentence. If I had been provided with a database
            // schema (UML), better CSV files and a better explanation of what I'm supposed to display, then yes I could have done it.
            // Also a better database schema, because if it is the current one you are using... I would suggest modifying it. I
            // have experience in modelizing databases and it could be better. I use MySQL Workbench for clarity.
            console.log("Hello?");
            console.log("[GET]" + this.API_URL + "?idVideo=" + idVideo);
            response = this.http.get<Encoder>(`${this.API_URL}?idVideo=${idVideo}`, {headers: this.headers1});
        // }
        // else if (id >= 0) {
        //     console.log("[GET] endpoint: " + `${this.API_URL}/${id}`);
        //     response = this.http.get<Encoder>(`${this.API_URL}/${id}`, {headers: this.headers1});
        //         // .pipe(map(response => {
        //         //     console.log(response);
        //         //     // response as User
        //         // }));
        // }
        // else {
        //     throw new Error("EncoderService.get(id) expects an id as integer > 0");
        // }

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
