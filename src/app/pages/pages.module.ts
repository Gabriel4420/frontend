import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home/home.component'
import { RoutingModule } from './routing.module';
import { InputComponent } from './input/input.component'

@NgModule({
  declarations: [HomeComponent, InputComponent],
  imports: [CommonModule, RoutingModule],
})
export class PagesModule {}
