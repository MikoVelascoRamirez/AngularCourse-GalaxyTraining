export class Product {
  private title?: string;
  private price!: number;
  private description!: string;
  private categoryId!: number;
  private images!: string[];

  constructor(
    title: string,
    price: number,
    description: string,
    categoryId: number,
    images: string[]
  ) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.categoryId = categoryId;
    this.images = images
  }
}
