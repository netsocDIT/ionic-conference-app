import { Component } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-practice-detail',
  styleUrls: ['./practice-detail.scss'],
  templateUrl: 'practice-detail.html'
})
export class PracticeDetailPage {
  session: any;
  isFavorite = false;
  defaultHref = '';
  constructor(
    private dataProvider: ConferenceData,
    private userProvider: UserData,
    private route: ActivatedRoute
  ) {}
  sessionClick(item: string) {
    console.log('Clicked', item);
  }
  toggleFavorite() {
    if (this.userProvider.hasFavorite(this.session.name)) {
      this.userProvider.removeFavorite(this.session.name);
      this.isFavorite = false;
    } else {
      this.userProvider.addFavorite(this.session.name);
      this.isFavorite = true;
    }
  }
  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      if (
        data &&
        data.competition &&
        data.competition[0] &&
        data.competition[0].groups
      ) {
        const sessionId = this.route.snapshot.paramMap.get('sessionId');
        for (const group of data.competition[0].groups) {
          if (group && group.sessions) {
            for (const session of group.sessions) {
              if (session && session.id === sessionId) {
                this.session = session;
                this.isFavorite = this.userProvider.hasFavorite(
                  this.session.name
                );
                break;
              }
            }
          }
        }
      }
    });
  }

  mentionSpeakerTwitter(speaker: any) {
    window.open(speaker.facebook, '_blank');
}
  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/schedule`;
  }
}
