import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable, Inject, Input } from '@angular/core';
import { single } from "rxjs/operators";
import { Observable } from 'rxjs';
import { ISupplier,ISupplierInputModel,ISupplierEditModel,ISupplyerSuccessModel } from '../model/samplemodel';


@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient){
}

  public loadSupplier(supplierInputModel:ISupplierInputModel): Observable<any> 
  {
    let params = new HttpParams();
    params = params.append('supplierId', supplierInputModel.supplierID.toString());
    //params = params.append('supplierId', "1");
    // return this.http.get<ISupplier>(this.apiUrls.getsuplierDetails, { params: params });
    // return this.http.get<ISupplier>("https://localhost:7184/api/Supplier/", { params: params });
    return this.http.get<ISupplier>("https://localhost:7184/api/Supplier/"+supplierInputModel.supplierID);

    // return this.http.get<ISupplier>("https://jsonplaceholder.typicode.com/posts/"+supplierInputModel.supplierID);
  }
  public saveSupplyerDetails(supplier:ISupplierEditModel): Observable<any> {
    return this.http.post<ISupplyerSuccessModel>("", supplier);
}
}
