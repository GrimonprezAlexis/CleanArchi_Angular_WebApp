import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent {
  userId: number;

  constructor(private route: ActivatedRoute) {
    this.userId = this.route.snapshot.params['id'];
  }
}
