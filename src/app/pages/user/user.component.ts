import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { UserFull } from 'src/app/shared/user-full.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  data: UserFull
  id: string
  loading = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getUserById();
  }

  getUserById() {
    this.usersService.getUserById(this.id).subscribe({
      next: (data) => {
        this.data = data;
        this.loading = false;
      }
    })
  }

  setGender(gender: string): string {
    switch(gender) {
      case 'male': 
        return 'Masculino'
      
      case 'female': 
        return 'Feminino'
      
      case 'other': 
        return 'Outro'
      
      default :
        return 'Não Informado'
      
    }
  }

  back() {
    this.router.navigate(['/users'])
  }
}
