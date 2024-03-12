import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DomSanitizer,SafeResourceUrl,SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-russian-u',
  templateUrl: './russian-u.component.html',
  styleUrls: ['./russian-u.component.css']
})
export class RussianUComponent implements OnInit{

  displayedColumns: string[] =  ['courseName'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private htttp:HttpClient,private sanitizer: DomSanitizer){}

  youtube_playList:any;
//?autoplay=0&controls=1&showinfo=0&modestbranding=1&rel=0'
  transform(_url:any):SafeResourceUrl{
    if (!_url) { return ''; }
    if(_url){
    _url = _url.replace('watch?v=','embed/');
    }   
    return this.sanitizer.bypassSecurityTrustResourceUrl(_url);
    }
getLink(url:any){
   this.youtube_playList=url;
}   

getArrayCourse:any=[];
ngOnInit(): void {
  this.htttp.get("http://localhost:8087/api/orders/authorName/Anastasiia").subscribe((result)=>{
  this.getArrayCourse=[result];
  this.dataSource = new MatTableDataSource<any>(this.getArrayCourse[0].courseTopicsList);
  // this.youtube_playList=this.getArrayCourse[0].courseTopicsList.
  this.youtube_playList=this.getArrayCourse[0].courseTopicsList[1].youtube_link;
  this.dataSource.paginator = this.paginator;
    });
  }
}
