import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  @ViewChild("myModalInfo", {static: false}) myModalInfo: TemplateRef<any> | undefined;
  @ViewChild("myModalWs", {static: false}) myModalWs: TemplateRef<any> | undefined;
  @ViewChild("myModalGm", {static: false}) myModalGm: TemplateRef<any> | undefined;
  @ViewChild("myModalIg", {static: false}) myModalIg: TemplateRef<any> | undefined;
 

  constructor(private modalService: NgbModal) {

   }
  
  mostrarModalInfo(){
    this.modalService.open(this.myModalInfo);
  }
  mostrarModalWs(){
    this.modalService.open(this.myModalWs);
  }
  mostrarModalGm(){
    this.modalService.open(this.myModalGm);
  }
  mostrarModalIg(){
    this.modalService.open(this.myModalIg);
  }

  ngOnInit(): void {
  }

}
