import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const name = "ECOM";
  const API = "http://localhost:3000/api";

  const [cart, setCart] = useState({});
  const [items, setItems] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')));
        saveCart(JSON.parse(localStorage.getItem('cart')));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, [])


  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart));
    let total = 0;
    let item = 0;
    for (let key in myCart) {
      total += myCart[key].price * myCart[key].qty;
      item += myCart[key].qty;
    }
    setSubTotal(total);
    setItems(item);
  }

  const clearCart = () => {
    setCart({});
    saveCart({});
  }

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  }

  return <>
    <Head>
      <title>Home | {name}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="description" content="Homepage of ECOM" />
    </Head>

    {pageProps.statusCode !== 404 && <Header name={name} />}
    <Component {...pageProps} name={name} API={API} cart={cart} subTotal={subTotal} items={items} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} />
    {pageProps.statusCode !== 404 && <Footer name={name} />}
  </>
}

export default MyApp
