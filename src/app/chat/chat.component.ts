import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: string[] = ['wiadomość 1', 'wiadomość 2'];
  userInput: any = '';

  sendMessage(event: Event): void {
    event.preventDefault();
    this.messages.push(this.userInput);
    this.userInput = '';
  }
}