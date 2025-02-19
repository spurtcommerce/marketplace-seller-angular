import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrl: './error-modal.component.scss'
})
export class ErrorModalComponent {
  constructor(public activeModal: NgbActiveModal,public router:Router) { }


  message: any;
  link: any;
  ngOnInit(): void {
  }

  clickhere(){

    this.router.navigate(['/seller-onboarding/seller-onboarding-Details'], { queryParams: { currentTab: this.link } })
    this.dismiss()
  }

  public dismiss() {
    this.activeModal.close();
  }
}
