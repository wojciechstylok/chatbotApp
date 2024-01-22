import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Settings } from '../models/Settings';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    FormsModule,
    MatCheckboxModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  @Input() userName: string = '';
  @Input() showAvatars: boolean = false;
  @Output() settingsChanged: EventEmitter<Settings> = new EventEmitter<Settings>();


  saveSettings(event: Event){
    const newSettings = new Settings(this.userName, this.showAvatars)
    this.settingsChanged.emit(newSettings);
  }
}
