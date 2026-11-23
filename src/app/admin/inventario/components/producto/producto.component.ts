import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { CategoriaService } from '../../services/categoria.service';

@Component({
    selector: 'app-producto',
    templateUrl: './producto.component.html',
    styleUrl: './producto.component.scss'
})
export class ProductoComponent {

    private productoService = inject(ProductoService);
    private categoriaService = inject(CategoriaService);

    categorias: any[] = [];
    products: any[] = [];
    cols: any[] = [];

    // Variables para Crear / Editar
    visible: boolean = false;
    producto_id: number = -1;

    // Variables para Eliminar
    deleteDialog: boolean = false;
    productoSeleccionado: any = {};

    // Vista previa de la imagen seleccionada
    imagenPreview: string | null = null;

    productoForm = new FormGroup({
        nombre: new FormControl('', [Validators.required]),
        precio: new FormControl('', [Validators.required]),
        stock: new FormControl<number | null>(null, [Validators.required]),
        categoriaId: new FormControl<number | null>(null, [Validators.required]),
        descripcion: new FormControl(''),
        imagen: new FormControl('')
    });

    constructor() {
        this.getProductos();
        this.getCategorias();
    }

    getProductos() {
        this.productoService.funListar2().subscribe(
            (res: any) => {
                this.products = res.data;
            }
        );
    }

    getCategorias() {
        this.categoriaService.funListar().subscribe(
            (res: any) => {
                this.categorias = res;
            }
        );
    }

    // Captura la imagen seleccionada desde el explorador de archivos del navegador
    onFileSelected(event: any) {
        const file: File = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                this.imagenPreview = reader.result as string;
                this.productoForm.patchValue({
                    imagen: this.imagenPreview
                });
            };
            reader.readAsDataURL(file);
        }
    }

    openNew() {
        this.producto_id = -1;
        this.imagenPreview = null;
        this.productoForm.reset();
        this.visible = true;
    }

    editProduct(product: any) {
        this.producto_id = product.id;
        this.imagenPreview = product.imagen || null;
        this.productoForm.patchValue({
            nombre: product.nombre,
            precio: product.precio,
            stock: product.stock,
            categoriaId: product.categoriaId || product.categoria_id || product.categoria?.id,
            descripcion: product.descripcion,
            imagen: product.imagen || ''
        });
        this.visible = true;
    }

    guardarProducto() {
        if (this.productoForm.invalid) return;

        // Convierte comas a puntos si el navegador usa formato español (ej. 90,00 -> 90.00)
        const precioLimpio = String(this.productoForm.value.precio).replace(',', '.');

        const datos = {
            ...this.productoForm.value,
            precio: Number(precioLimpio).toFixed(2),
            stock: Number(this.productoForm.value.stock),
            categoriaId: Number(this.productoForm.value.categoriaId)
        };

        if (this.producto_id === -1) {
            this.productoService.funGuardar(datos).subscribe(
                () => {
                    this.visible = false;
                    this.imagenPreview = null;
                    this.productoForm.reset();
                    this.getProductos();
                },
                (error: any) => console.error('Error al guardar:', error)
            );
        } else {
            this.productoService.funModificar(this.producto_id, datos).subscribe(
                () => {
                    this.visible = false;
                    this.producto_id = -1;
                    this.imagenPreview = null;
                    this.productoForm.reset();
                    this.getProductos();
                },
                (error: any) => console.error('Error al actualizar:', error)
            );
        }
    }

    deleteProduct(product: any) {
        this.productoSeleccionado = product;
        this.deleteDialog = true;
    }

    confirmarEliminar() {
        this.productoService.funEliminar(this.productoSeleccionado.id).subscribe(
            () => {
                this.deleteDialog = false;
                this.productoSeleccionado = {};
                this.getProductos();
            },
            (error: any) => console.error('Error al eliminar:', error)
        );
    }
}