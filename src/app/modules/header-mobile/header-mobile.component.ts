import { Component } from '@angular/core';
import {Path} from "../../config";

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css']
})
export class HeaderMobileComponent {
  path: string = Path.url
  constructor() {
  }
  ngOnInit(): void{
  }
}
