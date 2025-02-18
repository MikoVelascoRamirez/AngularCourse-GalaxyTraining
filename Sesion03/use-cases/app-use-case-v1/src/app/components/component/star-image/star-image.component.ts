import { Component, InjectFlags, input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-star-image',
  imports: [FontAwesomeModule],
  templateUrl: './star-image.component.html',
  styleUrl: './star-image.component.css'
})
export class StarImageComponent implements OnInit{

  rate = input(0);
  faStar = faStar;
  rateLevelList: string[] = [];

  ngOnInit(): void {
    this.rateLevelList = [...this.createRateLevelList(this.rate())];
  }

  createRateLevelList(rate: number): string[] {
    return new Array(rate).fill('*');
  }


}
