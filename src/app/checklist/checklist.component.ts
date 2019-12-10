import { Component, OnInit, HostListener } from '@angular/core';
import { ROLES } from '../models/roles.model';
import { CRITERIA } from '../models/criteria.model';
import { TASKS, Task, TASKS_MEMERY } from '../models/tasks.model';
import { timer } from 'rxjs';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  roleStatus: { [id: string]: boolean } = {};
  tasks: Task[] = [];
  TASKS = TASKS;
  criteria: { [id: string]: any } = {};
  itemStatus = {};
  missingCriteria = [];
  levelPriority = {
    'A': 1,
    'AA': 10,
    'AAA': 100,
  }

  constructor() { }

  @HostListener('window:beforeunload') onApplicationEnd() {
    window.localStorage.setItem('itemStatus', JSON.stringify(this.itemStatus));
  }

  get selectedRoles() {
    return Object.keys(this.roleStatus).filter(x => this.roleStatus[x]);
  }
  get selectedRolesByName() {
    return Object.keys(this.roleStatus).filter(x => this.roleStatus[x]).map(x => ROLES.find(y => y.id === x).shortName);
  }

  ngOnInit() {
    this.criteria = {};
    CRITERIA.forEach(x => this.criteria[x.id] = x);
    this.roleStatus = JSON.parse(window.localStorage.getItem('roles') || '{}');
    this.itemStatus = JSON.parse(window.localStorage.getItem('itemStatus') || '{}');

    this.tasks = this.getTasks();
      // .sort((a, b) => (this.levelPriority[(this.criteria[a.criteria[0]]||{level:'A'}).level] - this.levelPriority[(this.criteria[b.criteria[0]]||{level:'A'}).level]));

    this.missingCriteria = CRITERIA.filter(x => x.level === 'AAA' && !TASKS.find(y => y.criteria.includes(x.id)));

    if (this.tasks.length) {
      const randomMeme = TASKS_MEMERY[Math.ceil(Math.random() * TASKS_MEMERY.length) - 1];
      this.tasks.push(randomMeme);
    }
  }

  expandAll() {
    this.tasks.forEach((x, i) => {
      if (i < 10) {
        this.itemStatus[x.name] = this.itemStatus[x.name] || {expanded: true};
        this.itemStatus[x.name].expanded = true;
      } else {
        setTimeout(() => {
          this.itemStatus[x.name] = this.itemStatus[x.name] || {expanded: true};
          this.itemStatus[x.name].expanded = true;
        }, Math.floor(i / 10) * 10);
      }
    });
  }

  collapseAll() {
    this.tasks.forEach(x => {this.itemStatus[x.name] = this.itemStatus[x.name] || {expanded: false}; this.itemStatus[x.name].expanded = false;});
  }

  getTasks() {
    const applicableCriteria = this.selectedRoles
      .map(x => ROLES.find(y => y.id === x).applicableCriteria)
      .reduce((acc, curr) => {acc = [...acc, ...curr.filter(x => !acc.find(y => y === x))]; return acc;}, []);

    return TASKS
      .filter(x => !applicableCriteria.length || applicableCriteria.filter(c => x.criteria.includes(c)).length)
      .map(x => ({...x, level: this.criteria[x.criteria[0]] ? this.criteria[x.criteria[0]].level : ''}));
  }

  getRelated(task: Task) {
    return this.tasks.map((x, i) => x.criteria.filter(y => task.related && task.related.includes(y)).length ? {name: x.name, id: i} : null).filter(x => x !== null);
  }

  getEncapsulatedBy(task: Task) {
    return this.tasks.map((x, i) => x.criteria.filter(y => task.encapsulatedBy && task.encapsulatedBy.includes(y)).length ? {name: x.name, id: i} : null).filter(x => x !== null);
  }

  getApplicableRoles(roles: string[], criteria: string[]) {
    return roles.map(x => ROLES.find(y => y.id === x)).filter(x => x.applicableCriteria.filter(y => criteria.includes(y)).length).map(x => x.shortName);
  }

  toggleExpand(name: string) {
    this.itemStatus[name] = this.itemStatus[name] || {expanded: false};
    this.itemStatus[name].expanded = !this.itemStatus[name].expanded;
  }

  trackByName(index, item) {
    return item.name;
  }

  trackByText(index, item) {
    return item.text;
  }

  trackByHref(index, item) {
    return item.href;
  }

}
