import { Component, OnInit ,Input} from '@angular/core';
import { ISupplier,ISupplierInputModel,ISupplierEditModel } from 'src/app/model/samplemodel';
import {  SupplierService } from 'src/app/service/supplier.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public supplierInfo=<ISupplier>{address:"",city:"",companyName:"",contactName:"",contactTitle:"",country:"",fax:"",homePage:"",
  phone:"",postalCode:"", region:"",supplierID:0};
  public supplierDetails=<ISupplierEditModel>{address:"",city:"",companyName:"",contactName:"",contactTitle:"",country:"",fax:"",homePage:"",
  phone:"",postalCode:"", region:"",supplierID:0};
  isEditSupplier = true;
  @Input() supplierId: string="";
  selectContactTitle:any;
  contactTitle = [
    { name: '--Select--', id: 0 },
    { name: 'Mr', id: 1 },
    { name: 'Mrs', id: 2 },
    { name: 'Dr', id: 3 }
  ];
  IsWait=true;
  IsBussy=false;
  constructor(  private supplierService: SupplierService) { }
  
  ngOnInit(): void {
    this.selectContactTitle=this.contactTitle[0].name;
   this.loadSupplier();
  }

  public loadSupplier() {
    var supplierInputDetails = <ISupplierInputModel>{ supplierID: +1 };
    this.supplierService.loadSupplier(supplierInputDetails)
    .subscribe((res: ISupplier) => {
      if (res === null) {
                            console.error("Error in loading");
                        }
                        else {
                            this.supplierInfo = res;
                        }
    },
        _ => {
            console.error("Error on featching the supplier information");
        });
        this.IsWait=false;
        this.IsBussy=true
  }

  saveSupplier(){
    var data = this.supplierInfo;
    alert(data.companyName);
    var input = this.validateSupplyerDetails();

    this.supplierService.saveSupplyerDetails(this.supplierDetails)
    .subscribe((res: ISupplier) => {
      if (res === null) {
                            console.error("Error in save");
                        }
                        else {
                            this.supplierInfo = res;
                        }
    },
        _ => {
            console.error("Error on saveing the supplier information");
        });
  }

  private validateSupplyerDetails(): void {

    var data = this.supplierInfo;
    if (data && data != null) {
      if(data.companyName==""){
      }
    }
  }

}
