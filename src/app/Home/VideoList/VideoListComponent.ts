import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Video } from "@App/Entity/Video";
import { VideoService } from "@App/Service/VideoService";
import { Encoder } from "@App/Entity/Encoder";
import { EncoderService } from "@App/Service/EncoderService";
import { Global } from "@App/Helper/Global";

@Component({
    selector: "app-video-list",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./video-list.html",
    styleUrl: "./video-list.sass"
})
export class VideoListComponent {
    public videos: Video[] = [];
    public encoders: Encoder[] = [];

    public constructor(private videoService: VideoService, private encoderService: EncoderService)
    {
        // alert("video list Component");

        console.log(this.refreshVideos());

        console.log("this.getEncoderByVideo(5598)");
        console.log(this.getEncoderByVideo(5598));

        console.log(this.encoders);

        console.log("Carbone de 894894515 octets : " + Global.sizeToCarbon(894894515) + " kg");
    }

    public refreshVideos() {
        this.videoService.get()
            .subscribe({
                next: (videos: Video[]) => {
                    // console.log("Observable emitted the next value: ");
                    // console.log(video.serialize());
                    this.videos = Video.fromJSONArray(videos);
                    console.log("this.videoService.get()");
                    console.log(this.videos);
                },
                error: (error: any) => {
                    // console.error("Observable emitted an error: " + error)
                },
                complete: () => {
                    // console.log("Observable emitted the complete notification")
                }
            });
    }

    // This should literally be in the database schema... there should be an entity Video, Encoder, and then $video->getEncoders()
    // I'm just trying to do the best with the unpractical (no offense) CSV data that was given to me... I even had to actually ADD
    // a primary key (an artificial id) to two tables because they were actually not normal but joint (Manyto*) relationships and
    // consequently couldn't be inserted as such since MySQL REQUIRES a primary key to ALL tables. So excuse me for not doing the
    // exercie properly, but the both the input data and the explanations given were not "good", so I wasted a lot of time understanding
    // and tweaking things. In reality there should be 6 tables I think, the 3 main ones and the ManyTo* between some of them. Also,
    // I think there is redondancy, I saw quality in both Video and Encoder, and it seems to be the same quality? Or I'm mistaken? If
    // there is a compression there is a loss in quality? So why do we have
    /*

    (Video)
    "id": 5598,
    "name": "FACEBOOK_BOUYGUES_ULTYM_15s_VF_16-9_WEB",
    "duration": 15,
    "size": 28501260,
    "videoQuality": "1920x1080"

    (Encoder)
    "id": 1,
    "idEncoder": 13809,
    "idVideo": 5598,
    "size": 6266565,
    "quality": "1920x1080"

    Same video, of course compression so loss of size of quality remains the same?

    The exercise is not difficult per se, but the database schema (or rather absence of) was not adequate, and the PDF spoke from
    a perspective of someone who already knows what he's dealing with, I do NOT know the operational side and conventions and little
    keywords, so it was partly cryptic already. Also, way too long exercise. 1 view, 1 table, 1 controller, 1 entity, 1 service,
    1 component plus configuration/bugs already takes hours so more than that is too much.
    */

    public getEncoderByVideo(idVideo: number) {
        this.videos.forEach(video => {
            this.encoderService.getEncoderByVideo(video.id)
                .subscribe({
                    next: (encoders: Encoder[]) => {
                        this.encoders = Encoder.fromJSONArray(encoders);
                        console.log(this.encoders);
                    },
                    error: (error: any) => {
                        // console.error("Observable emitted an error: " + error)
                    },
                    complete: () => {
                        // console.log("Observable emitted the complete notification")
                    }
                });
        });
    }
}
