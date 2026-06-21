import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateProductoDto } from './dto/create-producto.dto';

@ApiTags('CRUD Productos Kirena')
@Controller('producto')
export class ProductoController {

    constructor(private productoService: ProductoService){}
    @ApiOperation({summary:'Obtener lista de productos skincare'})
    @ApiResponse({status:200, description:'Retorna lista de productos de skincare'})
    @Get()
    funlistar(){
        let productos=this.productoService.findAll()
        return productos
    }
    @ApiOperation({summary:'Crea un nuevo producto en kirena'})
    @ApiResponse({status:201, description:'Registra un nuevo producto en kirena'})
    @Post()
    funGuardar(@Body() prod:CreateProductoDto){
        let respuesta= this.productoService.create(prod)
        return respuesta;
    }

    @Get(':id')
    funMostrar(@Param('id') id){
        return "Mostrando...."+id
    }

    @ApiOperation({summary:'Modificar un producto de skincare'})
    @ApiResponse({status:201, description:'Modifica el producto'})
    @Put(':id')
    funModificarstrar(@Param('id')id,@Body() prod){
        return this.productoService.update(id,prod)
    }

    @ApiOperation({summary:'Elimina un producto de skincare'})
    @ApiResponse({status:201, description:'Elimina el producto'})    
    @Delete(':id')
    funEliminar(@Param('id') id){
        return this.productoService.delete(id)
    }
}
0