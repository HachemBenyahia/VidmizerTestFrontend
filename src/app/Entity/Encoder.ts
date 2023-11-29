export class Encoder
{
    public id: number;
    public idEncoder: number;
    public idVideo: number;
    public size: number;
    public quality: String;

    public constructor(id: number, idEncoder: number, idVideo: number, size: number, quality: String)
    {
        this.id = id;
        this.idEncoder = idEncoder;
        this.idVideo = idVideo;
        this.size = size;
        this.quality = quality;
    }

    public static fromJSONArray(json: any): Encoder[]
    {
        let array: Encoder[] = [];
        json.forEach((encoder: any) => {
            array.push(new Encoder(encoder.id, encoder.idEncoder, encoder.idVideo, encoder.size, encoder.quality));
        });
        return array;
    }

    public static fromJSON(json: any): Encoder
    {
        return new Encoder(json.id, json.idEncoder, json.idVideo, json.size, json.quality);
    }

    public serialize()
    {
        return {
            "id": this.id,
            "name": this.idEncoder,
            "duration": this.idVideo,
            "size": this.size,
            "encoderQuality": this.quality,
        };
    }
}
