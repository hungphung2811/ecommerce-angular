import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce';
  public alo: string = 'alo alo';
  public age: number = 10;
  public arr: string[] = ['alo ', 'ale', 'chuoi', 'cam', 'viet name']
  public handleClick(): void {
    console.log('alo alo ');
  }

}
