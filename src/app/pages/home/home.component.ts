import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { ApiService } from 'src/app/services/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public getAllData: any

  private setAllData: any

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.apiResult.subscribe((data) => {
      this.setAllData = data
      this.getAllData = this.setAllData
    })
  }
}
