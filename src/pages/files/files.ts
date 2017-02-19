import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Component({
  selector: 'page-files',
  templateUrl: 'files.html'
})
export class FilesPage {
 
  files: any;
 
  constructor(public http: Http) {
 
  this.http.get('https://hack.chasmathis.com/files').map(res => res.json()).subscribe(
    data => {
        this.files = data.data.children;
    },
    err => {
        console.log("Oops!");
    }
);
}
}