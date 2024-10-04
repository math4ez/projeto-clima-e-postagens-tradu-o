import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../services/post.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
  posts: Post[] = [];
  errorMessage: string | null = null; // Variável para armazenar a mensagem de erro

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (data: Post[]) => {
        this.posts = data;
        this.errorMessage = null; // Limpa a mensagem de erro se os dados forem carregados com sucesso
      },
      error: (error) => {
        this.errorMessage = 'Não foi possível carregar os posts. Tente novamente mais tarde.'; // Mensagem de erro
        console.error('Erro ao carregar os posts:', error);
      }
    });
  }
}