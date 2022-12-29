export interface ISupplier {
supplierID:number; 
companyName:string; 
contactName :string; 
contactTitle :string; 
address :string; 
city :string; 
region :string; 
postalCode :string; 
country :string; 
phone :string; 
fax :string; 
homePage :string; 
}
export interface ISupplierInputModel {
    supplierID:number; 
    }
    export interface ISupplierEditModel {
        supplierID:number; 
        companyName:string; 
        contactName :string; 
        contactTitle :string; 
        address :string; 
        city :string; 
        region :string; 
        postalCode :string; 
        country :string; 
        phone :string; 
        fax :string; 
        homePage :string; 
        }    
        export  interface ISupplyerSuccessModel {
            isSuccess: boolean;
            message: string;
        }