export class Message{
    content: string;
    fromBot: boolean;

    constructor(content: string, fromBot: boolean){
        this.content = content;
        this.fromBot = fromBot;
    }
}