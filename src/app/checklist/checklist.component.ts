import { Component, OnInit, HostListener } from '@angular/core';
import { ROLES } from '../models/roles.model';
import { TASKS, CRITERIA, Task } from '../models/tasks.model';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  roleStatus: { [id: string]: boolean } = {};
  tasks: Task[] = [];
  criteria = {};
  itemStatus = {};
  levelPriority = {
    'A': 1,
    'AA': 10,
    'AAA': 100,
  }

  constructor() { }

  @HostListener('window:beforeunload') onApplicationEnd() {
    window.localStorage.setItem('itemStatus', JSON.stringify(this.itemStatus));
  }

  ngOnInit() {
    this.criteria = {};
    CRITERIA.forEach(x => this.criteria[x.id] = x);
    this.roleStatus = JSON.parse(window.localStorage.getItem('roles') || '{}');
    this.itemStatus = JSON.parse(window.localStorage.getItem('itemStatus') || '{}');
    const applicableCriteria = Object.keys(this.roleStatus)
      .filter(x => this.roleStatus[x])
      .map(x => ROLES.find(y => y.id === x).applicableCriteria)
      .reduce((acc, curr) => {acc = [...acc, ...curr.filter(x => !acc.find(y => y === x))]; return acc;}, []);
    this.tasks = TASKS.filter(x => applicableCriteria.includes(x.criteria)).sort((a, b) => (
      this.levelPriority[(this.criteria[a.criteria]||{level:'A'}).level] - this.levelPriority[(this.criteria[b.criteria]||{level:'A'}).level]
    ));
    this.tasks.push({name: 'Developer', description: '<ul><li>Give Lily snacks</li></ul>', criteria: 'N/A'});
  }

  toggleExpand(name: string) {
    this.itemStatus[name] = this.itemStatus[name] || {expanded: false};
    this.itemStatus[name].expanded = !this.itemStatus[name].expanded;
  }

}
