import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  showError: boolean;

  public ngOnInit(): void {
    setTimeout(() => this.showError = true, 1000);
  }
}
