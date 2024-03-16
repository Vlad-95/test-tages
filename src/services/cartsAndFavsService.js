export function getCartLS() {
  return JSON.parse(localStorage.getItem('cart'));
}

export function addToCartLS(id) {
  const cart = { ...getCartLS() };
  cart[id] = 1; //Эта запись означает количество данного товара в корзине
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function removeFromCartLS(id) {
  const cart = { ...getCartLS() };
  delete cart[id];
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function getFavsLS() {
  return JSON.parse(localStorage.getItem('favs'));
}

export function addToFavsLS(id) {
  const favs = { ...getFavsLS() };
  favs[id] = 1; //Эта запись означает количество данного товара в Избранном
  localStorage.setItem('favs', JSON.stringify(favs));
}

export function removeFromFavsLS(id) {
  const favs = { ...getFavsLS() };
  delete favs[id];
  localStorage.setItem('favs', JSON.stringify(favs));
}
