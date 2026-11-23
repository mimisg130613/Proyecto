import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Administración',
                items: [
                    { label: 'Admin', icon: 'pi pi-fw pi-home', routerLink: ['/admin'] },
                    { label: 'Perfil', icon: 'pi pi-fw pi-user', routerLink: ['/admin/perfil'] }
                ]
            },
            {
                label: 'Inventario',
                items: [
                    { label: 'Categoria', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/categoria'] },
                    { label: 'Producto', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/producto'] }
                ]
            },
            {
                label: 'Pedidos',
                items: [
                    { label: 'Lista Pedidos', icon: 'pi pi-fw pi-eye', routerLink: ['/admin/pedido'] },
                    { label: 'Nuevo Pedidos', icon: 'pi pi-fw pi-globe', routerLink: ['/admin/pedido/nuevo'] },
                    { label: 'Clientes', icon: 'pi pi-fw pi-users', routerLink: ['/admin/cliente'] }
                ]
            },
            {
                label: 'Roles y Usuario',
                items: [
                    { label: 'Usuarios', icon: 'pi pi-fw pi-users', routerLink: ['/admin/usuario'] },
                    { label: 'Roles', icon: 'pi pi-fw pi-mobile', routerLink: ['/admin/role'] }
                ]
            }
        ];
    }
}