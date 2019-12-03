import { Component, OnInit } from '@angular/core';
import { ROLES } from '../models/roles.model';
import { TASKS, CRITERIA } from '../models/tasks.model';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  roleStatus: { [id: string]: boolean } = {};
  tasks = [];
  criteria = {};
  levelPriority = {
    'A': 1,
    'AA': 10,
    'AAA': 100,
  }

  constructor() { }

  ngOnInit() {
    this.criteria = {};
    CRITERIA.forEach(x => this.criteria[x.id] = x);
    this.roleStatus = JSON.parse(window.localStorage.getItem('roles') || '{}');
    const applicableCriteria = Object.keys(this.roleStatus)
      .filter(x => this.roleStatus[x])
      .map(x => ROLES.find(y => y.id === x).applicableCriteria)
      .reduce((acc, curr) => {acc = [...acc, ...curr.filter(x => !acc.find(y => y === x))]; return acc;}, []);
    this.tasks = TASKS.filter(x => applicableCriteria.includes(x.criteria)).sort((a, b) => (
      this.levelPriority[(this.criteria[a.criteria]||{level:'A'}).level] - this.levelPriority[(this.criteria[b.criteria]||{level:'A'}).level]
    ));
    console.log(this.tasks);
  }

}
