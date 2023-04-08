export class Serie {
    id: number;
    title: string;
    channel: string;
    seasons: number;
    description: string;
    url: string;
    image: string;

    constructor(id: number, title: string, channel: string, seasons: number, description: string, url: string, image: string) {
        this.id = id;
        this.title = title;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.url = url;
        this.image = image;
    }
}