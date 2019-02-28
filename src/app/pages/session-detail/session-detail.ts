import { Component } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../providers/user-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-session-detail',
  styleUrls: ['./session-detail.scss'],
  templateUrl: 'session-detail.html'
})
export class SessionDetailPage {
  session$: Observable<any>;
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
    const sessionId = this.route.snapshot.paramMap.get('sessionId');
    this.session$ = this.dataProvider.getSessionById(sessionId);
    
  }
  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/schedule`;
  }
}
