import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroComponent } from './hero.component';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, HeroRoutingModule],
  exports: [HeroComponent],
})
export class HeroModule {}
