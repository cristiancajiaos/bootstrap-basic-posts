import { Component } from '@angular/core';
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {MainService} from "./main.service";
import {Post} from "../shared/post";
import {CommonModule, NgFor} from "@angular/common";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgbTooltip, NgFor, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  public posts: Post[] = [];

  constructor(
    public mainService: MainService
  ) {}

  ngOnInit() {
    this.getPosts();
  }

  public getPosts(): void {
    this.mainService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
