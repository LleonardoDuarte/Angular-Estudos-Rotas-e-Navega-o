import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rota-parametrizada',
  templateUrl: './rota-parametrizada.component.html',
  styleUrls: ['./rota-parametrizada.component.scss'],
})
export class RotaParametrizadaComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((res) =>
      console.log(res, res.id, res.username)
    );
  }
}
