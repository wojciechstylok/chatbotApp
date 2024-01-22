import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionAndAnswers } from './models/QuestionAndAnswers';

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
  messages: string[] = [];
  userInput: string = '';
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
    this.messages.push(this.userInput);
    this.getAnswer(this.userInput);
    this.userInput = '';
  }

  getAnswer(userMessage: string){
    const question = this.definedQuestions.find(item => item.question === userMessage.toLowerCase());
    if (question) {
      const randomIndex = Math.floor(Math.random() * question.answers.length);
      this.messages.push(question.answers[randomIndex]);
    } else {
      this.messages.push('Nie zrozumiałem co masz na myśli :( Czy możesz powtórzyć?');
    }
  }
}