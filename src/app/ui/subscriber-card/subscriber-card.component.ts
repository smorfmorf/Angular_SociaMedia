import { Component, Input } from '@angular/core';
import { Profile } from '../../services/profile.service';
import { ImgUrlPipe } from '../../pipe/img-url.pipe';
@Component({
  selector: 'app-subscriber-card',
  imports: [ImgUrlPipe],
  templateUrl: './subscriber-card.component.html',
  styleUrl: './subscriber-card.component.scss',
})
export class SubscriberCardComponent {
  @Input() profile!: Profile;
}
