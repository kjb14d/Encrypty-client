import { Component } from '@angular/core';

import { FilesPage } from '../files/files';
import { AddPage } from '../add/add';
import { GroupsPage } from '../groups/groups';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = FilesPage;
  tab2Root: any = AddPage;
  tab3Root: any = GroupsPage;

  constructor() {

  }
}
