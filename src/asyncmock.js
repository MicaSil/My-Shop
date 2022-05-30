export const productos = [
    {id: '1', nombre: 'Remera Malu', precio: '690', categoria: 'Dama', img: 'https://f.fcdn.app/imgs/76ad67/rusty.uy/rustuy/f782/webp/catalogo/MALU-GO-1/600x800/t-shirt-malu-rusty-gris-oscuro.jpg',stock: 10, descripcion: 'T-SHIRT MALU RUSTY - Gris Oscuro'},
    {id:'2', nombre:'Remera Lauri', precio: '790', categoria:'Dama', img: 'https://f.fcdn.app/imgs/417637/rusty.uy/rustuy/cdb6/webp/catalogo/LAURI-BL-1/600x800/t-shirt-lauri-rusty-blanco.jpg', stock: '10', descripcion:'T-SHIRT LAURI RUSTY - Blanco'},
    {id:'3', nombre:'Remera Filtro', precio: '990', categoria:'Dama', img: 'https://f.fcdn.app/imgs/268d20/rusty.uy/rustuy/4624/webp/catalogo/BUZIA-AZ-1/600x800/t-shirt-filtro-uv-buzia-rusty-azul.jpg', stock: '10', descripcion:'T-SHIRT FILTRO UV RUSTY - Azul'},
]

export const remeras = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2)
    })
}
