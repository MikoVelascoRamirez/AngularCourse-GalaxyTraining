import { TitleCasePipe } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-image',
  imports: [TitleCasePipe],
  templateUrl: './category-image.component.html',
  styleUrl: './category-image.component.css'
})

export class CategoryImageComponent implements OnInit{

  category = input('');
  srcImg: string = '';
  categories = {
    "men": "men's clothing",
    "woman": "women's clothing",
    "jewelry": "jewelery",
    "electronics": "electronics",
    "others": "others"
  }

  ngOnInit(): void {
    this.srcImg = this.getSrcImg(this.category());
  }

  getSrcImg(category: string): string {
    const categoriesEntries: [string, string][] = Object.entries(this.categories);
    const categoryFound = categoriesEntries.find((entry: string[]) => {
      return category === entry[1]
    })
    return categoryFound?.[0] ?? '';
  }
}
