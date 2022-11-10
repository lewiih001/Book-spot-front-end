

const [cart, setCart] = useState({});

const fetchCart = () => {
    commerce.cart.retrieve().then((cart) => {
      setCart(cart);
    }).catch((error) => {
      console.log('There was an error fetching the cart', error);
    });
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  <button
  name="Add to cart"
  className="product__btn"
  onClick={handleAddToCart}
>
  Quick add
</button>

const handleAddToCart = () => {
    onAddToCart(product.id, 1);
  }

  