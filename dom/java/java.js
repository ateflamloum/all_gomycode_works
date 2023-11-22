document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.item');
    const totalPrice = document.getElementById('total-price');

    items.forEach(item => {
        const incrementButton = item.querySelector('.quantity-increment');
        const decrementButton = item.querySelector('.quantity-decrement');
        const deleteButton = item.querySelector('.delete');
        const likeButton = item.querySelector('.like');
        const quantity = item.querySelector('.quantity');
        const price = parseInt(item.querySelector('.price').textContent.slice(1));

        incrementButton.addEventListener('click', () => {
            const currentQuantity = parseInt(quantity.textContent);
            quantity.textContent = currentQuantity + 1;
            updateTotalPrice();
        });

        decrementButton.addEventListener('click', () => {
            const currentQuantity = parseInt(quantity.textContent);
            if (currentQuantity > 0) {
                quantity.textContent = currentQuantity - 1;
                updateTotalPrice();
            }
        });

        deleteButton.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });

        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('liked');
        });

        function updateTotalPrice() {
            let total = 0;
            items.forEach(item => {
                const itemPrice = parseInt(item.querySelector('.price').textContent.slice(1));
                const itemQuantity = parseInt(item.querySelector('.quantity').textContent);
                total += itemPrice * itemQuantity;
            });
            totalPrice.textContent = total;
        }
    });
});
