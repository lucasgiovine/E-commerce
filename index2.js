document.addEventListener('DOMContentLoaded', function() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(products => {
        const cardsElements = document.querySelectorAll('.cards');
  
        cardsElements.forEach((cardElement, index) => {
          const product = products[index];
          cardElement.addEventListener('click', function() {
            const productId = cardElement.dataset.productId;
            window.location.href = `detalhes.html?id=${productId}`;
          });
  
          const imageElement = cardElement.querySelector('.imagem');
          imageElement.src = product.image;
  
          const tituloElement = cardElement.querySelector('.tituloproduto');
          tituloElement.textContent = `Título: ${product.title}`;
  
          const idElement = cardElement.querySelector('.idproduto');
          idElement.textContent = `Id: ${product.id}`;
  
          const priceElement = cardElement.querySelector('.precoproduto');
          priceElement.textContent = `Preço em R$: ${product.price}`;
  
          const descriptionElement = cardElement.querySelector('.descricaoproduto');
          descriptionElement.textContent = `Descrição: ${product.description}`;
  
          const categoryElement = cardElement.querySelector('.categoriaproduto');
          categoryElement.textContent = `Categoria: ${product.category}`;
        });
      })
      .catch(error => {
        console.error(error);
      });
  });
  