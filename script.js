const produtos = [
{
nome:"Luva MMA Pro",
preco:129.90,
imagem:"https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600"
},
{
nome:"Bandagem Elástica",
preco:29.90,
imagem:"https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600"
},
{
nome:"Caneleira Muay Thai",
preco:189.90,
imagem:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600"
},
{
nome:"Bocal Profissional",
preco:39.90,
imagem:"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600"
},
{
nome:"Faixa Jiu-Jitsu",
preco:59.90,
imagem:"https://images.unsplash.com/photo-1604480133080-602261a680df?w=600"
},
{
nome:"Kimono Premium",
preco:349.90,
imagem:"https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600"
},
{
nome:"Finger Tape",
preco:14.90,
imagem:"https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600"
}
];

const productsDiv =
document.getElementById("products");

const cartItems =
document.getElementById("cartItems");

let carrinho = [];

function renderProdutos(lista){

productsDiv.innerHTML="";

lista.forEach(produto=>{

productsDiv.innerHTML += `
<div class="card">

<img src="${produto.imagem}">

<div class="card-content">

<h3>${produto.nome}</h3>

<div class="price">
R$ ${produto.preco.toFixed(2)}
</div>

<button onclick='adicionar(${JSON.stringify(produto)})'>
Adicionar
</button>

</div>

</div>
`;

});
}

function adicionar(produto){

carrinho.push(produto);

atualizarCarrinho();

}

function atualizarCarrinho(){

cartItems.innerHTML="";

let total=0;

carrinho.forEach(item=>{

total += item.preco;

cartItems.innerHTML += `
<div class="cart-item">
<span>${item.nome}</span>
<span>R$ ${item.preco.toFixed(2)}</span>
</div>
`;

});

document.getElementById("total")
.textContent = total.toFixed(2);

document.getElementById("cartCount")
.textContent = carrinho.length;

}

document.getElementById("cartBtn")
.addEventListener("click",()=>{

const painel =
document.getElementById("cartPanel");

painel.style.display =
painel.style.display === "block"
? "none"
: "block";

});

document.getElementById("search")
.addEventListener("input",(e)=>{

const texto =
e.target.value.toLowerCase();

const filtrados =
produtos.filter(produto=>
produto.nome
.toLowerCase()
.includes(texto)
);

renderProdutos(filtrados);

});

renderProdutos(produtos);