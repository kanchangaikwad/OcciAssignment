import { Component, OnInit, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { IMovie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: IMovie;
  @Output() ShowTrailer = new EventEmitter<IMovie>();
  safeSrc: SafeResourceUrl;
  movieTag: string;
  public modalRef: BsModalRef; // {1}

  constructor(private modalService: BsModalService, private sanitizer: DomSanitizer) { }

  ngOnInit() {

        this.movieTag ='';
        if (this.movie.Type.toLocaleLowerCase().includes('coming soon')) {
          this.movieTag = 'coming soon';
        }

        if(this.movieTag == '') {
          if (this.movie.Type.toLocaleLowerCase().includes('new')) {
            this.movieTag = 'NEW';
          }
        }
  }

    public openModal(template: TemplateRef<any>) {
    this.ShowTrailer.emit(this.movie);

    this.convertToEmbedURL(this.movie.TrailerURL);
    this.modalRef = this.modalService.show(template); // {3}
  }


  convertToEmbedURL(url: string): void {

    let VideoId = url.split('v=')[1];
    let srcEmdURL = 'https://www.youtube.com/embed/';

    const ampersandPosition = VideoId.indexOf('&');
    if (ampersandPosition !== -1) {
      VideoId = VideoId.substring(0, ampersandPosition);
    }
   const youtubeURL = srcEmdURL = srcEmdURL + VideoId;
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(youtubeURL);

  }


}
