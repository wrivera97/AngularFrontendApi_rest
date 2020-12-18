import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppServiceService} from './shared/app-service.service';
import {UsersModel} from './models/users.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  testData: Array<UsersModel>;
      constructor(private appService: AppServiceService, private http: HttpClient) {}
ngOnInit() {
        this.newUser();
}
newUser() {
  this.appService.get('/users').subscribe(
    (Response) => {
      this.testData = Response['found'];
      alert('Server OK');
      console.log(Response);
  }
);
  }
}
