import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../user.service';
import { User } from '../../../../entities/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['../../identification.css']
})
export class RegisterComponent implements OnInit {
    hide = true;
    loginError: string = '';
    userList?: User[];
    currentUser?: User;
    userForm!: FormGroup;

    constructor(private router: Router, private _userService: UserService, private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this._userService.getUserList().subscribe({
            next: (res) => {
                this.userList = res;
            },
            error: (err) => {
                console.log(err);
            },
            complete: () => {
                console.log('Finish');
            }
        });
        
        // Using FormBuilder to create the FormGroup
        this.userForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(5)]],
            address: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        });
    }

    register() {
        const newUser = this.userForm.value;
        this.currentUser = this.userList?.find(u => u.name === this.userForm.value.username && u.password === this.userForm.value.password);
       console.log(newUser)
        if (this.currentUser) {
            this.loginError = "משתמש קיים במערכת";
        } else {
            this.currentUser=newUser;
            this._userService.setNewUser(this.currentUser!).subscribe({
                next: (res) => {
                    console.log("asdfghj")
                    this.router.navigate(['/recipe']);
                },
                error: (err) => {
                    console.log(err); // Handle error if required
                },
                complete: () => {
                    console.log('Finish'); // Handle completion if required
                }
            });
        }
    }
}
