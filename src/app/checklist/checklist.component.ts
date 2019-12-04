import { Component, OnInit, HostListener } from '@angular/core';
import { ROLES } from '../models/roles.model';
import { CRITERIA } from '../models/criteria.model';
import { TASKS, Task } from '../models/tasks.model';

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
    const applicableCriteria = this.selectedRoles
      .map(x => ROLES.find(y => y.id === x).applicableCriteria)
      .reduce((acc, curr) => {acc = [...acc, ...curr.filter(x => !acc.find(y => y === x))]; return acc;}, []);

    this.tasks = TASKS
      .filter(x => !applicableCriteria.length || applicableCriteria.filter(c => x.criteria.includes(c)).length)
      .map(x => ({...x, level: this.criteria[x.criteria[0]] ? this.criteria[x.criteria[0]].level : ''}));

    this.missingCriteria = CRITERIA.filter(x => x.level !== 'AAA' && !TASKS.find(y => y.criteria.includes(x.id)));
    console.log(applicableCriteria, TASKS, this.missingCriteria);
    
    if (this.tasks.length) {
      this.tasks.push({
        name: 'Lastly...',
        tasks: [{text: 'Give Spark team a pizza.', subtasks: [{text: `Just cheese is fine.`}]}],
        intent: `I don't understand the question.`,
        criteria: [],
        documents: [{text: 'Technique P20: Acceptable Restaurants (complete list)', href: 'https://www.pizzahut.ca/home'}]
      });
    }
  }

  expandAll() {
    this.tasks.forEach(x => {this.itemStatus[x.name] = this.itemStatus[x.name] || {expanded: true}; this.itemStatus[x.name].expanded = true;});
  }

  collapseAll() {
    this.tasks.forEach(x => {this.itemStatus[x.name] = this.itemStatus[x.name] || {expanded: false}; this.itemStatus[x.name].expanded = false;});
  }

  getApplicableRoles(roles: string[], criteria: string[]) {
    return roles.map(x => ROLES.find(y => y.id === x)).filter(x => x.applicableCriteria.filter(y => criteria.includes(y)).length).map(x => x.shortName);
  }

  toggleExpand(name: string) {
    this.itemStatus[name] = this.itemStatus[name] || {expanded: false};
    this.itemStatus[name].expanded = !this.itemStatus[name].expanded;
  }

}
