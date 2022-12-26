import { Injectable, Inject, Input } from '@angular/core';
import { ISupplier } from '../model/samplemodel';
import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs-compat/Observable';
import { single } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient){
}

  public loadSupplier(): Observable<any> 
  {
    let params = new HttpParams();
    // params = params.append('supplierId', asupplierInputModel.suplierId.toString());
    params = params.append('supplierId', "1");
    // return this.http.get<ISupplier>(this.apiUrls.getsuplierDetails, { params: params });
    return this.http.get<ISupplier>("https://localhost:7184/api/Supplier/", { params: params });
}

}
