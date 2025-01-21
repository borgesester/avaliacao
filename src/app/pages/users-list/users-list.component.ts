import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { EMPTY, Subject, switchMap, take } from 'rxjs';
import { AlertModalService } from 'src/app/services/alert-modal.service';
import { UsersService } from 'src/app/services/users.service';
import { ListUser } from 'src/app/shared/list-user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  data: ListUser;
  page: number = 0;
  pages: number[]
  loading: boolean;
  $result: Subject<boolean>
  constructor(
    private usersService: UsersService,
    private alertModalService: AlertModalService

  ) {}

  ngOnInit(): void {
    this.getUsersList(this.page)
  }

  getUsersList(page: number) {  
    this.page = page
    this.loading = true
    this.usersService.getUsers(page).subscribe({      
      next: (data) => {
        this.loading = false
        this.data = data
        this.pages = this.getNpages(Math.ceil(data.total / data.limit)) 
      },
    })
  }
  getNpages(n: number): Array<number> {
    return Array(n)
  };

  selectPage(page: number) {
    if(page !== this.page) {
      this.getUsersList(page)
    }
  }
  deleteUser(id: string) {
    console.log(id);

    const result$ = this.alertModalService.showConfirm(
      'Confirmação',
      'Você quer mesmo excluir este usuário?',
      'Sim',
      'Não'
    );
    result$
      .asObservable()
      .pipe(
        take(1),
        switchMap((result) =>
          result ? this.usersService.deleteUser(id) : EMPTY
        )
      )
      .subscribe({
        next: () => {
          location.reload();
        },
        error: () => {
        },
      });

  }
}
