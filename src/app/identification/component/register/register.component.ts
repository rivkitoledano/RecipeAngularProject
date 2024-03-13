import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../user.service';
import { User } from '../../../../entities/user.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { password } from '../../../password-pattern-validator';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['../../identification.css','./register.component.css']
})
export class RegisterComponent implements OnInit {
    hide = true;
    loginError: string = '';
    userList?: User[];
    currentUser?: User;
    userForm!: FormGroup;
    count: number = 0; 

    constructor(
        private router: Router,
        private _userService: UserService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.userForm = this.formBuilder.group({
            id: [this.count + 1], // Initialize Code to the nextUserCode + 1
            name: ['', Validators.required],
            password: ['', [Validators.required, password]],
            address: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        });

        this.userForm.value.name = this.route.snapshot.queryParams['username'];

        if (this.userForm.value.name) {
            console.log('comming',this.userForm.value.name)
            this.userForm.get('name')!.setValue(this.userForm.value.name);
        }

        this._userService.getUserList().subscribe({
            next: (res) => {
                this.userList = res;
                this.count = this.userList.length+1; // Set nextUserCode to the size of the array

            },
            error: (err) => {
                console.log(err);
            },
            complete: () => {
                console.log('Finish');
            }
        });
    }

    register() {
        const newUser = this.userForm.value as User;
    
        this.currentUser = this.userList?.find(u => u.name === newUser.name); // Check for existing user
    
        if (this.currentUser) {
          this.loginError = "משתמש קיים במערכת";
        } else {
            const newUser = { ...this.userForm.value, id: this.count };
            this._userService.setNewUser(newUser).subscribe({
             next: (res) => {
              console.log("Registration successful");
              this.router.navigate(['/recipe']);
              sessionStorage.setItem('name', newUser.name);
              sessionStorage.setItem('password', newUser.password); // Storing password in sessionStorage is generally not recommended for security reasons
              sessionStorage.setItem('id', newUser.id); 
            },
            error: (err) => {
              console.error('Registration failed:', err);
              this.loginError = 'Registration failed. Please try again.';
            }
          });
        }
      }
}
