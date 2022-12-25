import { Component, OnInit } from '@angular/core';
import { ISupplier } from 'src/app/model/samplemodel';
import { NgForm } from '@angular/forms';
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
  constructor() { }

  ngOnInit(): void {
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
