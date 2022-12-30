import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService,
   httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should retrun all post',()=>{
    service.getAllPosts()
            .subscribe(post => {
              expect(post).toBeTruthy();
            });
        const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts');
        expect(req.request.method).toEqual("GET");
  })
});