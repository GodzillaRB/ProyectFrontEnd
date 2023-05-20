import { Component } from '@angular/core';
import {Path} from "../../config";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  path: string = Path.url
  constructor() {
  }
  ngOnInit(): void {
  }
}
