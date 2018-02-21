import { Component } from '@angular/core';

import { todoPage } from '../todoPage/todoPage';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LastTabPage } from '../last-tab/last-tab';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = todoPage;
  tab3Root = ContactPage;
  tab4Root = LastTabPage;

  constructor() {

  }
}
