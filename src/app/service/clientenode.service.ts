import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './Categoria';
import { Producto } from './Producto';

@Injectable({
  providedIn: 'root'
})
export class ClientenodeService {

  URL:string = "https://demonodemongodb.herokuapp.com/api/categoria/";
  URLP:string = "https://demonodemongodb.herokuapp.com/api/producto/";
  constructor(private httpc:HttpClient) {
  

   }
   getCategorias(): Observable<Categoria>{
     return this.httpc.get<Categoria>(this.URL);
   }

   addCategoria(nombreF:string){
     let objetoCategoria = {nombre: nombreF}

     return this.httpc.post(this.URL,objetoCategoria);
   }


   editCategoria(nombreF:string, idCategoria:string){
    let obj = {nombre: nombreF}

    return this.httpc.put( `${this.URL}/${idCategoria}`,obj );
  }

  deleteCategoria( idCategoria:string){

    return this.httpc.delete( this.URL+idCategoria);
  }
   
  getCategoriaById( idCategoria:string){

    return this.httpc.get<Categoria>( this.URL+idCategoria);
  }
  
     getProducto(): Observable<Producto>{
     return this.httpc.get<Producto>(this.URLP);
   }

   addProducto(nombreF:string){
     let objetoCategoria = {nombre: nombreF}

     return this.httpc.post(this.URLP,objetoCategoria);
   }


   editProducto(nombreF:string, idCategoria:string){
    let obj = {nombre: nombreF}

    return this.httpc.put( `${this.URLP}/${idCategoria}`,obj );
  }

  deleteProducto( idCategoria:string){

    return this.httpc.delete( this.URLP+idCategoria);
  }
   
  getProductoById( idCategoria:string){

    return this.httpc.get<Categoria>( this.URLP+idCategoria);
  }
}
