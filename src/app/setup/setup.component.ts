import { Component, OnInit } from '@angular/core';
import { ROLES } from '../models/roles.model';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  roleStatus: { [id: string]: boolean } = {};
  showHeaderNavigation = false;

  roles: any[] = ROLES;

  get selectedRoles() {
    return Object.keys(this.roleStatus).filter(x => this.roleStatus[x]);
  }

  constructor() { }

  ngOnInit() {
    this.roleStatus = JSON.parse(window.localStorage.getItem('roles') || '{}');
    if (this.selectedRoles.length) {
      this.showHeaderNavigation = true;
    }
  }

  toggleRole(id: string) {
    this.roleStatus[id] = !this.roleStatus[id];
    window.localStorage.setItem('roles', JSON.stringify(this.roleStatus));
  }

}
