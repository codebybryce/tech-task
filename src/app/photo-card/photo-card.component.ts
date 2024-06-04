import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.css'
})
export class PhotoCardComponent implements OnInit {
  HttpClient = inject(HttpClient)
  data: any[] = []
  currentPage: number = 0

  ngOnInit(): void { this.getData()}

  getData(page?: number){
    this.HttpClient.get(`https://jsonplaceholder.typicode.com/photos?_start=${this.currentPage}&_limit=20`).subscribe((data: any)=>{
      this.data = data
    })
  }

  nextPage(){
    this.currentPage ++;
    this.getData()
  }

  prevPage(){
    if(this.currentPage >= 0){
      this.currentPage --;
      this.getData()
    }
  }
}
