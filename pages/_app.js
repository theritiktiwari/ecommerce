import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import LoadingBar from 'react-top-loading-bar';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const name = "ECOM";

  const router = useRouter();

  const [progress, setProgress] = useState(0)

  const [user, setUser] = useState({ token: null, email: null });
  const [key, setKey] = useState();

  const [cart, setCart] = useState({});
  const [items, setItems] = useState(0);
  const [subTotal, setSubTotal] = useState(0);


  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')));
        saveCart(JSON.parse(localStorage.getItem('cart')));
      }
    } catch (error) {
      localStorage.clear();
    }
    const myUser = JSON.parse(localStorage.getItem("myUser"));
    if (myUser) {
      setUser({ token: myUser.token, email: myUser.email });
    }
    setKey(Math.random());
  }, [router]);

  const logout = () => {
    localStorage.removeItem("myUser");
    setUser({ token: null, email: null });
    setKey(Math.random());
    router.push("/");
  }


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

  const buyNow = (itemCode, qty, price, name, size, variant, image) => {
    let newCart = {};
    newCart[itemCode] = { qty: 1, price, name, size, variant, image };
    setCart(newCart);
    saveCart(newCart);
    router.push('/checkout');
  }

  const addToCart = (itemCode, qty, price, name, size, variant, image) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant, image };
    }
    setCart(newCart);
    saveCart(newCart);
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant, image) => {
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

    <LoadingBar
      color='rgba(67, 56, 202, 1)'
      height={3}
      progress={progress}
      waitingTime={800}
      onLoaderFinished={() => setProgress(0)}
    />
    {pageProps.statusCode !== 404 && pageProps.statusCode !== 500 && key && <Header name={name} key={key} user={user} logout={logout} />}
    <Component {...pageProps} name={name} user={user} cart={cart} subTotal={subTotal} items={items} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} buyNow={buyNow} />
    {pageProps.statusCode !== 404 && pageProps.statusCode !== 500 && <Footer name={name} />}
  </>
}

export default MyApp
