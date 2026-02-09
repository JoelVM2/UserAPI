import { Component, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-user-detail-component',
  imports: [RouterLink],
  templateUrl: './user-detail-component.html',
  styleUrl: './user-detail-component.css',
})
export class UserDetailComponent implements OnDestroy {
  userId!: number;
  selectedUser: any;
  private subscription?: Subscription;

  constructor(
    public userService: UserService,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap.subscribe(params => {
      this.userId = Number(params.get('id'));
      this.getUser(this.userId);
    });
  }

  getUser(id: number) {
    this.userService.getUser(id).subscribe({
      next: (response: any) => {
        this.selectedUser = response;
        this.cdr.detectChanges();
      },
      error: (e) => {
        console.error('Error obteniendo usuario', e);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}