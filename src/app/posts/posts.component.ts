import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  currentPosts: any[] = [];
  currentPage: number = 1;
  postsPerPage: number = 10;
  totalPages: number = 1;
  pageNumbers: number[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(
        (data) => {
          this.posts = data.slice(0, 100); // Get first 100 posts
          this.totalPages = Math.ceil(this.posts.length / this.postsPerPage);
          this.pageNumbers = Array.from({ length: this.totalPages }, (_, index) => index + 1); // Generate page numbers
          this.updateCurrentPosts();
        },
        (error) => {
          console.error('Error fetching posts:', error);
        }
      );
  }

  updateCurrentPosts(): void {
    const startIndex = (this.currentPage - 1) * this.postsPerPage;
    const endIndex = startIndex + this.postsPerPage;
    this.currentPosts = this.posts.slice(startIndex, endIndex);
  }

  // Method to navigate directly to the selected page
  goToPage(page: number): void {
    this.currentPage = page;
    this.updateCurrentPosts();
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateCurrentPosts();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateCurrentPosts();
    }
  }

  // Method to navigate to the PostDetailComponent
  viewDetails(postId: number): void {
    this.router.navigate(['/post', postId]);
  }

  // Logout Method: Clear session storage and navigate to login page
  logout(): void {
    // Clear all session storage
    sessionStorage.clear();

    // Redirect to login page
    this.router.navigate(['/login']); // Adjust the route if needed
  }
}
