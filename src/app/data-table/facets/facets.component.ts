import { Component,OnInit} from '@angular/core';
import {Car} from '../domain/car';
import {CarService} from '../domain/car.service';
@Component({
  selector: 'facets',
  templateUrl: './facets.component.html',
  styleUrls: ['./facets.component.less'],
  providers:[CarService]
})
export class FacetsComponent implements OnInit {
  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.cars=this.carService.getCarsSmall().slice(0,10);
  }
}
