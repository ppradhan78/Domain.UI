import { Component, OnInit } from '@angular/core';
import { ISupplier } from 'src/app/model/samplemodel';
import {  SupplierService } from 'src/app/service/supplier.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public supplierInfo=<ISupplier>{address:"",city:"",companyName:"",contactName:"",contactTitle:"",country:"",fax:"",homePage:"",
  phone:"",postalCode:"", region:"",supplierID:0};
  isEditSupplier = false;
 
  contactTitle = [
    { name: 'Mr', id: 1 },
    { name: 'Mrs', id: 2 },
    { name: 'Dr', id: 3 }
  ];
  // constructor(  private supplierService: SupplierService) { }
  constructor(  ) { }
  ngOnInit(): void {
   // this.loadSupplier();
  }
  public loadSupplier()
  {
    // this.supplierService.loadSupplier()
    //             .subscribe((res: ISupplier) => {
    //                 // this.isButtonDisable = false;
    //                 if (res === null) {
    //                     console.error("Error in loading");
    //                 }
    //                 else {
    //                     this.supplierInfo = res;
    //                 }
    //             });
  }
  saveSupplier(){
    var data = this.supplierInfo;
    alert(data.companyName);
    var input = this.validateSupplyerDetails();
  }
  private validateSupplyerDetails(): void {
    var data = this.supplierInfo;
    if (data && data != null) {
      if(data.companyName==""){

      }
  }
  }

}
