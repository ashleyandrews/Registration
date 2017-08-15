import { Component } from '@angular/core';

class User{
  constructor(
      public firstName: String="",
      public lastName: String= "",
      public email: String="",
      public password: String="",
      public conpassword: String="",
      public address: String="",
      public apt: String="",
      public city: String="",
      public state: String="",
      public luck: Boolean=null,
  ){}
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = new User();
  all_users = [];
  new_user = null;

  onSubmit(){
   console.log(this.new_user) 
   this.new_user = this.user;
   this.all_users.push(this.user);
   this.user = new User();
   console.log(`${this.user.firstName} has registered`)
  } 
}

