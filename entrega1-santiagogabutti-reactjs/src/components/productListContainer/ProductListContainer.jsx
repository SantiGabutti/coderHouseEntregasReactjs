function ProductListContainer() {
    return (
        <ol id="listProducts" class="lists">
            <li>
            <div class="productCardContent">
                    <div class="photoContainer">
                        <img class="photoProduct" src="#" alt="Producto1"/>
                    </div>
                    <div class="infoProduct">
                        <h4 class="nameProduct">Producto1</h4>
                        <div class="priceContent">
                            <h3 class="priceProduct">$300000</h3>
                        </div>
                        <div class="addButtonContainer">
                            <button>Agregar al carrito</button>
                        </div>
                    </div>
                </div>`
            </li>
            <li>
            <div class="productCardContent">
                    <div class="photoContainer">
                        <img class="photoProduct" src="#" alt="Producto1"/>
                    </div>
                    <div class="infoProduct">
                        <h4 class="nameProduct">Producto2</h4>
                        <div class="priceContent">
                            <h3 class="priceProduct">$150000</h3>
                        </div>
                        <div class="addButtonContainer">
                            <button>Agregar al carrito</button>
                        </div>
                    </div>
                </div>`
            </li>
            <li>
            <div class="productCardContent">
                    <div class="photoContainer">
                        <img class="photoProduct" src="#" alt="Producto1"/>
                    </div>
                    <div class="infoProduct">
                        <h4 class="nameProduct">Producto3</h4>
                        <div class="priceContent">
                            <h3 class="priceProduct">$250000</h3>
                        </div>
                        <div class="addButtonContainer">
                            <button>Agregar al carrito</button>
                        </div>
                    </div>
                </div>`
            </li>
        </ol>
    );
}

export default ProductListContainer;