import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hero',
    loadChildren: () =>
      import('../modules/hero/hero.module').then((m) => m.HeroModule),
  },
  {
    path: 'aboutMe',
    loadChildren: () =>
      import('../modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('../modules/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  {
    path: 'footer',
    loadChildren: () =>
      import('../modules/footer/footer.module').then((m) => m.FooterModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
