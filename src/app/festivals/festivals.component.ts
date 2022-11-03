import { Component, OnInit } from '@angular/core';
import { FestivalsService } from '../service/festivals.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-festivals',
  templateUrl: './festivals.component.html',
  styleUrls: ['./festivals.component.scss']
})

export class FestivalsComponent implements OnInit {

  festivals: any;

  constructor(private festivalsData: FestivalsService) {
    this.displayFestivals();
  }

  ngOnInit(): void {
  }

  displayFestivals() {
    this.festivalsData.getFestivals().subscribe((data) => {
      this.festivals = data
    });
  }
  
}
