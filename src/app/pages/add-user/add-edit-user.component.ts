import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertModalService } from 'src/app/services/alert-modal.service';
import { UsersService } from 'src/app/services/users.service';
import { Location } from 'src/app/shared/location.model';
import { UserFull } from 'src/app/shared/user-full.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit{
  data: UserFull;
  id: string;
  loading = true;
  @ViewChild('addUser') addUser: NgForm;
  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertModalService: AlertModalService
  ) { 
    
  }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    if(this.id) {
      this.getUserById();
    }else {
      this.data = new UserFull()
      this.data.location = new Location()
      this.loading = false;
    }
  }

  getUserById() {
    this.usersService.getUserById(this.id).subscribe({
      next:(data) => {
        this.data = data;
        if (this.data.dateOfBirth) {
          formatDate(this.data.dateOfBirth, 'yyyy-MM-dd', 'en')
        }  
        this.loading = false
      },
    })
  }

  createUser() {
    this.usersService.createUser(this.data).subscribe({
      next: (data) => {
        this.router.navigate(['/users'])
        this.alertModalService.showAlertSuccess('Usuário cadastrado com sucesso.')
      },
      error: (err) =>  {
        this.alertModalService.showAlertDanger('Ops! Não foi possível cadastrar esse usuário.')
        this.router.navigate(['/users'])
      },
    })
  }

  updateUser() {
    this.usersService.UpdateUser(this.id, this.data).subscribe({
      next: (data) => {
        this.router.navigate(['/users'])
        this.alertModalService.showAlertSuccess('Usuário atualizado com sucesso.')
      },
      error: (err) =>  {
        this.alertModalService.showAlertDanger('Ops! Não foi possível atualizar esse usuário.')
        this.router.navigate(['/users'])
      },
    })
  }

  submit() {
    this.id ? this.updateUser() : this.createUser()
  }
  getDate() {    
    let date = formatDate(new Date(), 'yyyy-MM-dd', 'en')
    return date
  }
}
