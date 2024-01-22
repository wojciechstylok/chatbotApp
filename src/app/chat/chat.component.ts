import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionAndAnswers } from '../models/QuestionAndAnswers';
import { Message } from '../models/Message';
import { MatIconModule } from '@angular/material/icon';
import { SettingsComponent } from '../settings/settings.component';
import { Settings } from '../models/Settings';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    SettingsComponent
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewChecked {
  @ViewChild('chatMessages') private chatMessagesRef: ElementRef | undefined;
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }
  messages: Message[] = [];
  userName: string = 'Gość';
  showAvatars: boolean = true;
  selectedAvatar: string = 'avatar1.png';
  userInput: string = '';
  displayGreetingMessage: boolean = true;
  displaySettings: boolean = false;
  definedQuestions: QuestionAndAnswers[] =
  [
    {
      question: 'witaj',
      answers: [
        'Cześć!', 'Czołem!', 'Witaj!', 'Hej!', 'Siemanko!'
      ]
    },
    {
      question: 'jak się nazywasz?',
      answers: [
        'Janek', 'Tomek', 'Bartek', 'Asia', 'Kasia'
      ]
    },
    {
      question: 'czym się zajmujesz?',
      answers: [
        'Programuję', 'Sprzedaję usługi', 'Jeżdżę taksówką', 'Obijam się', 'Niczym ciekawym'
      ]
    },
    {
      question: 'skąd jesteś?',
      answers: [
        'Z Cieszyna', 'Z Zielonej Góry', 'Z Katowic', 'Z Warszawy', 'Z Tychów'
      ]
    },
    {
      question: 'ile masz lat?',
      answers: [
        '20', '30', '40', '50', '60'
      ]
    }
  ];

  sendMessage(event: Event): void {
    event.preventDefault();
    this.displayGreetingMessage = false;
    const message = new Message(this.userInput, false)
    this.messages.push(message);
    this.getAnswer(this.userInput);
    this.userInput = '';
  }

  getAnswer(userMessage: string){
    const question = this.definedQuestions.find(item => item.question === userMessage.toLowerCase());
    const answer = new Message('', true);
    if (question) {
      const randomIndex = Math.floor(Math.random() * question.answers.length);
      answer.content = question.answers[randomIndex];
    } else {
      answer.content = 'Nie zrozumiałem co masz na myśli :( Czy możesz powtórzyć?';
    }
    this.messages.push(answer);
  }

  openSettings(){
    this.displaySettings = !this.displaySettings;
  }
  
  handleSettingsChanged(newSettings: Settings): void {
    this.userName = newSettings.userName;
    this.showAvatars = newSettings.showAvatars;
    this.selectedAvatar = newSettings.selectedAvatar;
    this.displaySettings = false;
  }

  private scrollToBottom(): void {
    if (this.chatMessagesRef && this.chatMessagesRef.nativeElement) {
      const chatMessagesElement: HTMLElement = this.chatMessagesRef.nativeElement;
      chatMessagesElement.scrollTop = chatMessagesElement.scrollHeight;
    }
  }
}