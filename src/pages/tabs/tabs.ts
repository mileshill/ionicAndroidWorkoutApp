import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { WorkoutsPage } from '../workouts/workouts';
import { AddWorkoutPage } from '../add-workout/add-workout';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WorkoutsPage;
  tab2Root = AddWorkoutPage;
  tab3Root = AboutPage;
  
  constructor() {

  }
}
