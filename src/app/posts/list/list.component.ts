import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';
import {Postoutputmodel,PostFilter  } from '../../model/Postsamplemodel';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit,AfterViewInit {

   public posts:Postoutputmodel[]=[];// |null|undefined;

   empFilters: PostFilter[]=[];
   Users: string[]=["1","2","3","4"];
   Titles: string[]=['All','sed ab est est','non est facere','aut amet sed'];
   defaultValue = "All";
   filterDictionary= new Map<string,string>();

   displayedColumns: string[] = ['id', 'title', 'userId', 'body'];
   dataSource=new MatTableDataSource(this.posts);
   dataSourceFilters = new MatTableDataSource(this.posts);

   @ViewChild('postTbSort') postTbSort = new MatSort();

   @ViewChild('paginator') paginator: MatPaginator;
  //  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
   pageSizes = [2,4,6];
   
  constructor(private postService:PostsService) { 
    
  }

  ngAfterViewInit(): void  {
    this.dataSource.paginator = this.paginator;
    this.postTbSort.disableClear = true;
    this.dataSource.sort = this.postTbSort;
    
   
}
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.empFilters.push({name:'userId',options:this.Users,defaultValue:this.defaultValue});
    this.empFilters.push({name:'titles',options:this.Titles,defaultValue:this.defaultValue});

    this.getAllPosts();
   
    this.dataSource.filterPredicate = function (record,filter) {
      return true;
    }
  }

  getAllPosts(){
   this.postService.getAllPosts().subscribe(data=> {
      this.posts = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyPostFilter(ob:MatSelectChange,postfilter:PostFilter) {
    this.filterDictionary.set(postfilter.name,ob.value);
    var jsonString = JSON.stringify(Array.from(this.filterDictionary.entries()));
    this.dataSourceFilters.filter = jsonString;
  }
}
