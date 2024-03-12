import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UserService } from '../../../user.service';
import { User } from '../../../../entities/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: '../../identification.css'
})
export class LoginComponent implements OnInit {
  hide = true;
  username: string = '';
  password: string = '';
  idUser?:number;
  loginError: string = '';
  userList?: User[]
  currentUser?: User;

  constructor(private router: Router, private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getUserList().subscribe({
      next: (res) => {
        this.userList = res
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('finish');
      }
    })
  }


  login() {
    this.currentUser = this.userList?.find(user => user.name === this.username);
    console.log("hi",this.currentUser)
    if (this.currentUser) {
      if (this.currentUser.password === this.password)
      {
        this.idUser=this.currentUser?.id;
        this.saveUserDetails()
        this.router.navigate(["/recipe"])
      } 
      else
        this.loginError = "Wrong password, try again"
    }
    else {
      const navigationExtras: NavigationExtras = {
        queryParams: { username: this.username }
    };
    this.router.navigate(["identification/register"],navigationExtras);
    }
  }
  saveUserDetails() {
    sessionStorage.setItem('name', this.username);
    sessionStorage.setItem('password', this.password);
    sessionStorage.setItem('id', (this.currentUser.id).toString()); 

  }
}
