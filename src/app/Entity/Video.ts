export class Video
{
    public id: number;
    public name: String;
    public duration: number;
    public size: number;
    public videoQuality: String;

    public constructor(id: number, name: String, duration: number, size: number, videoQuality: String)
    {
        this.id = id;
        this.name = name;
        this.duration = duration;
        this.size = size;
        this.videoQuality = videoQuality;
    }

    public static fromJSONArray(json: any): Video[]
    {
        let array: Video[] = [];
        json.forEach((video: any) => {
            array.push(new Video(video.id, video.name, video.duration, video.size, video.videoQuality));
        });
        return array;
    }

    public static fromJSON(json: any): Video
    {
        return new Video(json.id, json.name, json.duration, json.size, json.videoQuality);
    }

    public serialize()
    {
        return {
            "id": this.id,
            "name": this.name,
            "duration": this.duration,
            "size": this.size,
            "videoQuality": this.videoQuality,
        };
    }
}
