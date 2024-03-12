import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-english-u',
  templateUrl: './english-u.component.html',
  styleUrls: ['./english-u.component.css']
})
export class EnglishUComponent {

constructor(private sanitizer: DomSanitizer) {}

play_link: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/your-video-id");

itemsDetails = [{
  sno: 1,
  name: 'https://youtu.be/TThZIt4r3eg?si=BT-t01OI4eBCd7T5'
}, {
  sno: 2,
  name: 'https://youtu.be/cb-p_gkhIC0?si=GA2UM0gxBMRocpa2'
}, {
  sno: 3,
  name: 'https://youtu.be/nPYuVfdJPaQ?si=vMOEjsuFr6Ic2uDt'
}, {
  sno: 4,
  name: 'https://youtu.be/nPYuVfdJPaQ?si=y_IQXm9fkUDqyqLG'
}, {
  sno: 5,
  name: 'https://youtu.be/nPYuVfdJPaQ?si=y_IQXm9fkUDqyqLG'
}, {
  sno: 6,
  name: 'https://youtu.be/nPYuVfdJPaQ?si=y_IQXm9fkUDqyqLG'
}, {
  sno: 7,
  name: 'https://youtu.be/nPYuVfdJPaQ?si=y_IQXm9fkUDqyqLG'
},
{
sno: 8,
name: 'https://youtu.be/TThZIt4r3eg?si=BT-t01OI4eBCd7T5'
}, {
sno: 9,
name: 'https://youtu.be/cb-p_gkhIC0?si=GA2UM0gxBMRocpa2'
}, {
sno: 10,
name: 'https://youtu.be/nPYuVfdJPaQ?si=vMOEjsuFr6Ic2uDt'
}
];

to_play_nested:any=this.itemsDetails

i:any=0;
forword(){
  console.log(this.to_play_nested[this.i].name)
  this.i++;
}
reverse(){
  console.log(this.to_play_nested[this.i].name)
  this.i--;
}
}


