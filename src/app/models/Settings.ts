export class Settings {
    userName: string;
    showAvatars: boolean;
    selectedAvatar: string;

    constructor(userName: string, showAvatars: boolean, selectedAvatar: string){
        this.userName = userName;
        this.showAvatars = showAvatars;
        this.selectedAvatar = selectedAvatar;
    }
}