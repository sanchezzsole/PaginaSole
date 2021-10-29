let seccion = document.getElementById("section");
// seccion.style.visibility="hidden"
const comprarTickets=()=>{
    seccion.innerHTML=`
        <div class="container">
            <div class="row">
                <div class="cardsInicio col-8 justify-content-center ">
                    <div class="card-group text-center">
                        <div class="card">
                            <div class="card-body border border-primary mr-1">
                                    <h5 class="card-title">Estudiante</h5> 
                                    <p class="card-text">Tienen un decuento</p>                           
                                    <p class="card-title"><strong>80%</strong></p>                      
                                    <p class="card-text"><small class="text-muted">* presentar documentación</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body border border-info mr-1">
                                    <h5 class="card-title">Trainee</h5> 
                                    <p class="card-text">Tienen un decuento</p>                           
                                    <p class="card-title"><strong>50%</strong></p>                          
                                    <p class="card-text"><small class="text-muted">* presentar documentación</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body border border-warning mr-1">
                                    <h5 class="card-title">Junior</h5> 
                                    <p class="card-text">Tienen un decuento</p>                           
                                    <p class="card-title"><strong>15%</strong></p>                           
                                    <p class="card-text"><small class="text-muted">* presentar documentación</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        <form class="formularioCompleto row col-8 justify-content-center g-3">

            <div class="row valorTicket mt-3">
                <div class="col text-uppercase text-center">
                    <small>Venta</small>
                    <h2>Valor de ticket $200</h2>
                </div>
            </div>
            <div class="col-md-6">
               <input type="email" class="form-control" id="inputNombre" placeholder="Nombre">
            </div>
            <div class="col-md-6">
                <input type="email" class="form-control" id="inputApellido" placeholder="Apellido">
            </div>
            <div class="col-12">
                <input type="text" class="form-control" id="inputCorreo" placeholder="Correo">
            </div>
            <div class="col-md-6">
              <label for="inputCantidad" class="form-label">Cantidad</label>
              <input type="text" class="form-control" id="inputCantidad" placeholder="cantidad">
            </div>
            <div class="col-md-6">
                <label for="inputState" class="form-label">Categoria</label>
                <select id="inputState" class="form-select">
                    <option selected>Estudiante</option>
                    <option value="estudiante" selected>Estudiante</option>
                    <option value="trainee">Trainee</option>
                    <option value="junior">Junior</option>
                </select>
          </div>

            <div class="form-group col">
                <div id="totalCompra" class="alert alert-primary" role="alert">
                    Total a pagar: $
                </div>
            </div>

            <div class="form-row d-flex">
                <div class="form-group col-12 col-md-6">
                    <button type="reset" onclick="limpiar()" id="btnBorrar" class="btn btn-codo btn-block">Borrar</button>
                </div>
                <div class="form-group col-12 col-md-6">
                    <button type="button" id="botonCalcular" class="btn btn-codo btn-block"
                    data-bs-toggle="modal" data-bs-target="#exampleModal">Resumen</button>
                </div>
            </div>

        </form>

            
    

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">ticket N° </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div id="" class="modal-body">
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary">Confirmar compra</button>
            </div>
            </div>
        </div>
        </div>
    `;
    document.querySelector("#botonCalcular").addEventListener('click',()=>{
        let inputs = document.querySelectorAll("input");
        let descuento = document.querySelector("#inputState").value; 
        
        console.log(inputs);
        let comprador={
            nombre:inputs[0].value,
            apellido:inputs[1].value,
            correo:inputs[2].value,
            cantidad:inputs[3].value
                };
                
        calcularValor(descuento, comprador.cantidad,comprador);
    });
};
const calcularValor=(desc,cantEnt,comp)=>{
    let resultado = 0;
    let descuento = 0;
    let numT = document.querySelector("#exampleModalLabel");
    for (let index = 0; index < 8; index++) {
        numT.innerHTML+=crearNumTicket();
    }
    let modal = document.querySelector(".modal-body");
    let alert = document.querySelector("#totalCompra");
    if(desc == "estudiante"){
        resultado = (cantEnt * 200)*0.2;
        descuento = (cantEnt * 200)*0.8;
        alert.innerHTML="Total a pagar: $";
        alert.innerHTML+=resultado;
    }else if(desc == "trainee"){
        resultado = (cantEnt * 200)*0.5;
        descuento = (cantEnt * 200)*0.5;
        alert.innerHTML="Total a pagar: $";
        alert.innerHTML+=resultado;
    }else{
        resultado = (cantEnt * 200)*0.85;
        descuento = (cantEnt * 200)*0.15;
        alert.innerHTML="Total a pagar: $";
        alert.innerHTML+=resultado;
    }
    modal.innerHTML=`
        <p>Nombre: ${comp.nombre}</p>
        <p>Apellido: ${comp.apellido}</p>
        <p>Correo: ${comp.correo}</p>
        <p>Categoria: ${desc}</p>
        <p>Cantidad de Entradas: ${comp.cantidad}</p>
        <p>Descuento: ${descuento}</p>
        <p>Total a pagar: ${resultado}</p>
    `;
}

const crearNumTicket=()=>{
    return Math.floor(Math.random()*9);
};
const limpiar=()=>{
    let alert = document.querySelector("#totalCompra");
    alert.innerHTML="Total a pagar: $";
}