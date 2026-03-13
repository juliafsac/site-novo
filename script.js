const lista = document.querySelector(".lista-paises")

const paises = [

    {
        nome: "Paris",
        tours: "100+",
        img: "assets/img/paris.png"
    },

    {
        nome: "Singapore",
        tours: "300+",
        img: "assets/img/Singapore.png"
    },

    {
        nome: "Roma",
        tours: "400+",
        img: "assets/img/Roma,png"
    },

    {
        nome: "Bangkok",
        tours: "600+",
        img: "assets/img/Bangkok.png"
    },

    {
nome: "Bali",
tours: "600+",
img: "assets/img/Bali.png"
    },

    {
nome:"Phuket",
tours: "700+",
img: "assets/img/Phuket.png"
    },

    {
nome:"Tokyo",
tours: "600+",
img: assets/img/Tokyo.png
    },

    {
        nome:"Capadocia",
        tours: "900+",
        img: assets/img/Capadocia.png
    },
]


function mostrarProdutos (produtos){
lista.innerHTML = ""

produtos.ForEach(Produtos => { 
    lista.innerHTML += `
    <div class="destinos">
                        <img class="img-destinos" src="./assets/img/image.png" alt="">

                        <p class="titulo-qualidades">Paris</p>

                        <p class="texto-qualidades">100+ Tours</p>
                    </div>
                    `
})

}

