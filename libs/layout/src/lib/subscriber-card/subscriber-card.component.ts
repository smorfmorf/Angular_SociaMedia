import { Profile } from '@tt/interfaces/profile';
import { Component, Input } from '@angular/core';
import { ImgUrlPipe } from '@tt/common-ui';
@Component({
  selector: 'app-subscriber-card',
  imports: [ImgUrlPipe],
  templateUrl: './subscriber-card.component.html',
  styleUrl: './subscriber-card.component.scss',
})
export class SubscriberCardComponent {
  @Input() profile!: Profile;
}
