import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title = 'DynamicWeb';
}
