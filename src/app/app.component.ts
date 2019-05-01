import { Component } from '@angular/core';
import * as AOS from 'aos';
import { HttpService } from './http.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private _httpService: HttpService) {

  }

  ngOnInit() {
    AOS.init( {
      easing: 'ease-out-sine',
      duration: 1500
    });

    
    
  }

  onActivate(event) {
    // SCROLLS TO TOP OF PAGE ON COMPONENT CLICK
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 80); // how far to scroll on each step
            this.ngOnInit();
        } else {
            window.clearInterval(scrollToTop);
            this.ngOnInit();
        }
    }, 16);
    
}
  onLogo() {
    this.onActivate('$click');
}






}