import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'source',
        loadChildren: () => import('./source/source.module').then(m => m.JcomSourceModule)
      },
      {
        path: 'skill',
        loadChildren: () => import('./skill/skill.module').then(m => m.JcomSkillModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.JcomProfileModule)
      },
      {
        path: 'education',
        loadChildren: () => import('./education/education.module').then(m => m.JcomEducationModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.JcomContactModule)
      },
      {
        path: 'experience',
        loadChildren: () => import('./experience/experience.module').then(m => m.JcomExperienceModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class JcomEntityModule {}
