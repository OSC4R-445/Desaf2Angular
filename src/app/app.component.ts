import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  title = 'mdb-angular-ui-kit-free';

  // Variable para almacenar los datos del artículo al hacer clic
  productoSeleccionado: any | null = null;

  // Arreglo de productos con los atributos: nombre, precio, imagenUrl, tipoEnvio
  productos: any[] = [
    // URLs de Pexels con parámetros de tamaño y compresión para un ajuste perfecto
    {
      nombre: 'Laptop Gaming Pro',
      precio: 1299.99,
      imagenUrl: 'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío gratis',
      descripcion: 'Potencia extrema para los juegos más exigentes y tareas de alta demanda.',
    },
    {
      nombre: 'Cámara DSLR Profesional',
      precio: 1599.99,
      imagenUrl: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío seguro',
      descripcion: 'Captura imágenes con calidad de estudio y video en 4K.',
    },
    {
      nombre: 'TV 4K OLED 65"',
      precio: 1899.00,
      // URL corregida con parámetros de tamaño
      imagenUrl: 'https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío especializado',
      descripcion: 'Imágenes vibrantes y negros perfectos para una experiencia cinematográfica.',
    },
    {
      nombre: 'Drone Profesional',
      precio: 750.50,
      imagenUrl: 'https://images.pexels.com/photos/1034812/pexels-photo-1034812.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío seguro',
      descripcion: 'Captura aérea con estabilidad y video de alta definición.',
    },
    {
      nombre: 'Bicicleta de Montaña Pro',
      precio: 1150.00,
      imagenUrl: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Recogida en tienda',
      descripcion: 'Diseñada para los senderos más duros y el rendimiento máximo.',
    },
    {
      nombre: 'Mouse Gaming RGB',
      precio: 45.99,
      // URL corregida con parámetros de tamaño
      imagenUrl: 'https://images.pexels.com/photos/1486294/pexels-photo-1486294.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío estándar',
      descripcion: 'Precisión y velocidad para el jugador competitivo.',
    },
    {
      nombre: 'Funda para Smartphone',
      precio: 19.99,
      // URL corregida con parámetros de tamaño
      imagenUrl: 'https://images.pexels.com/photos/15860832/pexels-photo-15860832.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío express',
      descripcion: 'Protección elegante y duradera para tu dispositivo.',
    },
    {
      nombre: 'Disco Duro Externo 1TB',
      precio: 89.90,
      // URL corregida con parámetros de tamaño
      imagenUrl: 'https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío gratis',
      descripcion: 'Almacenamiento masivo para backups y archivos multimedia.',
    },
    {
      nombre: 'Taza de Café Programador',
      precio: 12.50,
      imagenUrl: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío estándar',
      descripcion: 'La taza perfecta para tus sesiones de codificación nocturnas.',
    },
    {
      nombre: 'Cable HDMI de Alta Velocidad',
      precio: 25.00,
      // URL corregida con parámetros de tamaño
      imagenUrl: 'https://images.pexels.com/photos/33693716/pexels-photo-33693716.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío express',
      descripcion: 'Soporta resoluciones 4K a 60Hz para una imagen cristalina.',
    },
  ];

  // Función para cargar los datos del artículo seleccionado
  seleccionarProducto(producto: any): void {
    this.productoSeleccionado = producto;
  }
}