import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  title = 'mdb-angular-ui-kit-free';

  // Arreglo de productos
  productos = [
    {
      titulo: 'Laptop Gaming Pro',
      precio: '$1,299.99',
      tipoEnvio: 'Envío gratis',
      imagen:
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400',
    },
    {
      titulo: 'Smartphone Ultra',
      precio: '$899.99',
      tipoEnvio: 'Envío express',
      imagen:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    },
    {
      titulo: 'Auriculares Inalámbricos',
      precio: '$199.99',
      tipoEnvio: 'Envío gratis',
      imagen:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    },
    {
      titulo: 'Cámara DSLR Profesional',
      precio: '$1,599.99',
      tipoEnvio: 'Envío seguro',
      imagen:
        'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400',
    },
    {
      titulo: 'Tablet Drawing Pro',
      precio: '$749.99',
      tipoEnvio: 'Envío gratis',
      imagen: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
    },
  ];

  // Propiedades individuales para binding de una vía
  producto1 = this.productos[0];
  producto2 = this.productos[1];
  producto3 = this.productos[2];
  producto4 = this.productos[3];
  producto5 = this.productos[4];
}
