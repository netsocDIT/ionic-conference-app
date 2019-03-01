import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-judge-detail',
  templateUrl: 'judge-detail.html',
  styleUrls: ['./judge-detail.scss'],
})
export class JudgeDetailPage {
  speaker: any;

  constructor(
    private dataProvider: ConferenceData,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  mentionSpeakerTwitter(speaker: any) {
    window.open(speaker.facebook, '_blank');
}

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      const speakerId = this.route.snapshot.paramMap.get('speakerId');
      if (data && data.judges) {
        for (const speaker of data.judges) {
          if (speaker && speaker.id === speakerId) {
            this.speaker = speaker;
            break;
          }
        }
      }
    });
  }
}
