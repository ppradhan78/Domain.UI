import { Injectable } from '@angular/core';
import {  of } from "rxjs";
import { ISupplier,ISupplierEditModel } from '../model/samplemodel';
@Injectable({
  providedIn: 'root'
})
export class SupplyerServiceMock {

  public supplierInfo=<ISupplier>{address:"",city:"",companyName:"",contactName:"",contactTitle:"",country:"",fax:"",homePage:"",
  phone:"",postalCode:"", region:"",supplierID:0};

  saveSupplyerDetails = (input: ISupplierEditModel) => { }

  loadSupplier = (input: any) => {
    return of(this.supplierInfo);
  }
  
}
