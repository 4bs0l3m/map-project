import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UserDto } from 'src/app/dtos/UserDto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-map-user-list',
  templateUrl: './map-user-list.component.html',
  styleUrls: ['./map-user-list.component.scss']
})
export class MapUserListComponent implements OnInit {

  constructor(private _userService:UserService) {

  }
  @Input()
  userList:UserDto[]=[];
  @Input('limit')
  limit:number=10;

  page:number=0;
  ngOnInit() {
    this.fillUserList();
  }
  getMoreUser(){
    this.page++;
    this.fillUserList();

  }
  fillUserList(){
    this._userService.getUsers({limit:this.limit,page:this.page})
    .subscribe(res=>{
      this.userList=res.data;
      console.log('res :', res);
      console.log('this.userList :', this.userList);
    })
  }

}
