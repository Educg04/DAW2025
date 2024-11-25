import { Component } from '@angular/core';
import {Iproducto} from '../../interfaces/iproducto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-primer-componente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './primer-componente.component.html',
  styleUrl: './primer-componente.component.css'
})


export class PrimerComponenteComponent {


  arrayprod: Iproducto[] = [];
  urlApi: string = "https://jsonblob.com/api/jsonBlob/1296106951539548160 ";
  currency: string = "";
  precioTotal: number = 0; 
  contador: number = 0;
  cestucaList: Iproducto[ ] =[];

  ngOnInit() {
    fetch(this.urlApi)
      .then(response => response.json())
      .then(json => {
        this.currency = json.currency;
        this.arrayprod = json.products;
        this.arrayprod.forEach((producto: Iproducto) => {
          producto.cantidad = 0; 
          producto.id = this.contador;
          this.contador ++;
        });

        console.log(this.currency);
        console.log(this.arrayprod);
      });
  }


  

  subirContador(producto: Iproducto): void {
    producto.cantidad++;
    this.actualizarCesta();
  }

  calcularTotal(producto: Iproducto): string {
    const total = producto.price * (producto.cantidad || 0);
    return  total.toFixed(2);
  }

  

  actualizarCesta(): void {
    this.cestucaList = []; 
    for (let producto of this.arrayprod) {
      if (producto.cantidad > 0) {
        this.cestucaList.push(producto); 
      }
    }
  }

  bajarContador(producto: Iproducto): void {
    if (producto.cantidad > 0) {
      producto.cantidad--;
      this.actualizarCesta();
    }
  }

  calcularTotalCesta(): number {
    let total = 0;
    for (let producto of this.cestucaList) {
      total += producto.price * producto.cantidad;
    }
    return total;
  }

 
}

