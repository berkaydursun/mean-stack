import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {
  
  constructor(private modalService: NgbModal) { }

  public confirm(
    
    btnOkText: string = 'OK',
    btnCancelText: string = 'Cancel',
    dialogSize: 'sm' | 'lg' = 'sm'): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmationDialogComponent, { size: dialogSize });
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    return modalRef.result;

  }

}
