import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter()

  public search(value: string) {
    this.emmitSearch.emit(value)
  }

  constructor() {}

  ngOnInit(): void {}
}
