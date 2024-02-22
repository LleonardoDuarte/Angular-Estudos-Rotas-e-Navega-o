import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 18576cd0caaa603add4395feee4767de697c5357

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
<<<<<<< HEAD
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    setInterval(() => {
      this.router.navigate(['404']);
    }, 5000);
  }
=======
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> 18576cd0caaa603add4395feee4767de697c5357
}
