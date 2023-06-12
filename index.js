   fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
    const cardsElements = document.querySelectorAll('.cards');

    cardsElements.forEach((cardElement, index) => {
      const product = products[index];
      cardElement.addEventListener('click', function() {
        window.location.href = `detalhes.html?id=${product.id}`;
      });
    });
  })
          document.addEventListener('DOMContentLoaded', function() {
            let cardsElements = document.querySelectorAll('.cards');
          
            cardsElements.forEach(function(cardElement) {
              cardElement.addEventListener('click', function() {
                const productId = cardElement.dataset.productId;
                window.location.href = `detalhes.html?id=${productId}`;
              });
            });
          
            fetch('https://fakestoreapi.com/products')
              .then(res => res.json())
              .then(products => {
                products.forEach(function(product, index) {
                    const cardElement = cardsElements[index];
            
                    const imageElement = cardElement.querySelector('.imagem');
                    imageElement.src = product.image;

                    const tituloElement = cardElement.querySelector('.tituloproduto');
                    tituloElement.textContent = product.title;
            
                    const descricaoElement = cardElement.querySelector('.idproduto');
                    descricaoElement.textContent = `ID: ${product.id}`;
            
                    const priceElement = cardElement.querySelector('.precoproduto');
                    priceElement.textContent = `R$: ${product.price}`;
                  });
                  
                })
                
                fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(products => {
                  let cardsElements = document.querySelectorAll('.cards2');
              
                  cardsElements.forEach((cardElement, index) => {
                    const product = products[index];
                    const imageElement = cardElement.querySelector('.imagem2');
                    const idProdutoElement = cardElement.querySelector('.idproduto2');
                    const tituloProdutoElement = cardElement.querySelector('.tituloproduto2');
                    const precoProdutoElement = cardElement.querySelector('.precoproduto2');
              
                    imageElement.src = product.image;
                    idProdutoElement.textContent = `ID: ${product.id}`;
                    tituloProdutoElement.textContent = product.title;
                    precoProdutoElement.textContent = `Preço: R$ ${product.price}`;
                  });
                })
              .catch(error => {
                console.error(error);
              });
          });
          