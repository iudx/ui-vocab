import { Component, OnInit } from '@angular/core';
import { DataService, ClassResult } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  constructor(private backend: DataService) {}

  classList: Observable<ClassResult[]>;

  ngOnInit(): void {
    // this.classList = this.backend.getAllClasses();
    // console.log(this.classList);
  }
}
