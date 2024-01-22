export class Settings {
    userName: string;
    showAvatars: boolean;

    constructor(userName: string, showAvatars: boolean){
        this.userName = userName;
        this.showAvatars = showAvatars;
    }
}