import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges {
  myData: any;
  selected: any;
  dogoImg: any;

  constructor(private service: PostService) {}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.service.getPosts().subscribe((data) => {
      this.myData = data;
      console.log(this.myData.message);
    });
  }
  
  onSelected(){
    this.service.getImg(this.selected).subscribe((data) => {
      this.dogoImg = data
    });
  }
 
}
