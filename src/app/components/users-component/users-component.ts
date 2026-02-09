import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user-service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-users-component',
  imports: [RouterLink],
  templateUrl: './users-component.html',
  styleUrl: './users-component.css',
})
export class UsersComponent {
  constructor(public userService: UserService,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (response: any) => {
        this.userService.users = response.users;
        console.log('Usuarios cargados:', this.userService.users);
        this.cdr.detectChanges();
      },
      error: (e) => {
        console.log('Error obteniendo usuarios', e);
      }
    });
  }
}