import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'https://dog.ceo/api/breeds/list/all';

  constructor(private httpClient: HttpClient) {}

  getPosts() {
    return this.httpClient.get(this.url);
  }

  getImg(dogoName: String) {
    return this.httpClient.get(
      `https://dog.ceo/api/breed/${dogoName}/images/random`
    );
  }
}
