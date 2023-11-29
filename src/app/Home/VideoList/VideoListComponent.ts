import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-video-list",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./video-list.html",
    styleUrl: "./video-list.sass"
})
export class VideoListComponent {

    public constructor()
    {
        alert("video list Component");
    }
}
