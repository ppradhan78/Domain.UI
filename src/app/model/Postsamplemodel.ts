export interface Postoutputmodel{
    userId?:number;
    id:number ;
    title:string;
    body:string;
}
export interface PostFilter {
    name:string;
    options:string[];
    defaultValue:string;
}

export interface filterOption{
    name:string;
    value:string;
    isdefault:boolean;
}