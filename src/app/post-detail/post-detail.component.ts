import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  imports: [CommonModule],  
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: any = {};  // To hold the post data
  postId: number = 1;  // Default post ID, can be changed dynamically

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the post ID from the route parameter
    this.route.paramMap.subscribe(params => {
      this.postId = +params.get('id')!; // Parse the post ID from the route
      this.fetchPostDetails(); // Fetch the post details after getting the ID
    });
  }

  // Fetch post details from the API
  fetchPostDetails(): void {
    this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${this.postId}`)
      .subscribe(
        data => {
          this.post = data;  // Assign the fetched data to the post
        },
        error => {
          console.error('Error fetching post details:', error);
        }
      );
  }
}
