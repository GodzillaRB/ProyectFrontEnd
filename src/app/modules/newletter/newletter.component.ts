import { Component } from '@angular/core';
import {Path} from "../../config";

@Component({
  selector: 'app-newletter',
  templateUrl: './newletter.component.html',
  styleUrls: ['./newletter.component.css']
})
export class NewletterComponent {
  path: string = Path.url
  constructor() {
  }
  ngOnInit(): void{
  }
}
