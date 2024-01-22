import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chatbotApp';
}
