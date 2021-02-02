import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  takeANoteDisplay;
  tilteDisplay = {
    display : 'none'
  };

  constructor(private renderer: Renderer2) { }
  @ViewChild('titleDisplay') menu: ElementRef;
  @ViewChild('takeANote') takeANoteFocus: ElementRef;

  ngOnInit(): void {
  }

  takeNote() {
    this.takeANoteDisplay =  {
      display : 'none'
    };
    this.tilteDisplay = {
      display : 'block'
    };

  }

  // takeNote() {
  //   setTimeout(() => {
  //     const elem = this.renderer.selectRootElement('#takeANote');
  //     // console.log("focus onssssdsds jsj ",this.renderer.selectRootElement('#titleDisplay') )
  //     let b = false
  //     this.renderer.listen(elem, 'focus', () => {
  //       let f = true

  //       this.renderer.listen('window', 'click', (e: Event) => {
  //         let g = document.getElementById('titleDisplay')


  //         console.log("foce::;;, ,,", document.activeElement == g )
  //        if ((document.activeElement !== g ) &&  e.target !== this.menu.nativeElement ) {
  //           console.log('clicked outside',e);
  //       }
  //    });
  //    this.renderer.listen(elem, "blur", () => {
  //     //   console.log("blur")
  //     //   this.takeANoteDisplay = {display : 'block' }
  //     //   this.tilteDisplay = {display : 'none'}
  //      })
  //       console.log('focus on ');
  //       // var element = this.renderer.selectRootElement('#takeANote');
  //       // this.renderer.listen(elem, "focus", () => {
  //       // console.log("focus ossssn ")

  //       // })
  //         // element.focus();
  //      });

  //     // this.renderer.listen(elem, "blur", () => {
  //     //   console.log("blur")
  //     //   this.takeANoteDisplay = {display : 'block' }
  //     //   this.tilteDisplay = {display : 'none'}
  //     //  });
  //     elem.focus();
  //   }, 0);

  //   console.log('sds');
  //   this.takeANoteDisplay = {display : 'none' };
  //   this.tilteDisplay = {display : 'block'};

  // }

}
