import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { BiPlusCircle, BiMinusCircle } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [disabled, setDisabled] = useState(true);

  const router = useRouter();
  useEffect(() => {
    if (name.length > 2 && mobile.length > 2 && address.length > 2 && pincode.length > 2 && city.length > 2) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, mobile, address, pincode, city]);

  const getPincode = async (pin) => {
    let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
    let pinData = await pins.json();
    if(pin){
      if (pinData[pin]) {
        setCity(pinData[pin][0]);
        setState(pinData[pin][1]);
      } else {
        setCity('');
        setState('');
      }
    } 
  }

  useEffect(() => {
    const myUser = JSON.parse(localStorage.getItem('myUser'));
    if (!myUser) {
      router.push("/auth");
    } else {
      const fetchUser = async (token) => {
        let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth/getUser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ token: token })
        });
        let response = await a.json();
        if (response.type === "success") {
          setName(response.data.name);
          setEmail(response.data.email);
          setMobile(response.data.mobile.toString());
          setAddress(response.data.address);
          setPincode(response.data.pincode.toString());
          getPincode(response.data.pincode);
        }
      }

      fetchUser(myUser.token);
    }
  }, [router]);


  const handleChange = async (e) => {
    e.target.name == "name" ? setName(e.target.value) : null;
    e.target.name == "mobile" ? setMobile(e.target.value) : null;
    e.target.name == "address" ? setAddress(e.target.value) : null;
    e.target.name == "city" ? setCity(e.target.value) : null;
    if (e.target.name == "pincode") {
      setPincode(e.target.value);
      if (e.target.value.length == 6) {
        getPincode(e.target.value);
      } else {
        setCity('');
        setState('');
      }
    }
  }

  const initiatePayment = async () => {
    let ordID = Math.floor(Math.random() * Date.now());
    let cart = props.cart;
    let subTotal = props.subTotal;
    const data = { cart, subTotal, ordID, name, email, mobile, address, pincode, city, state }
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/preTransaction`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    let txnRes = await a.json();

    if (txnRes.type === "success") {
      let txnToken = txnRes.txnToken;
      var config = {
        "root": "",
        "flow": "DEFAULT",
        "data": {
          "orderId": ordID,
          "token": txnToken,
          "tokenType": "TXN_TOKEN",
          "amount": subTotal
        },
        "handler": {
          "notifyMerchant": function (eventName, data) {
            // console.log("notifyMerchant handler function called");
            // console.log("eventName => ", eventName);
            // console.log("data => ", data);
          }
        }
      };
      if (window.Paytm && window.Paytm.CheckoutJS) {
        window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
          window.Paytm.CheckoutJS.invoke();
        }).catch(function onError(error) {
          // console.log("error => ", error);
        });
      }
    } else {
      if (txnRes.cartClear) {
        props.clearCart();
      }
      toast.error(`${txnRes.message}`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setName('');
    setMobile('');
    setAddress('');
    setPincode('');
    setCity('');
    setState('');
  }

  return (
    <>
      <Head>
        <title>Checkout | {props.name}</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
      </Head>
      <Script type="application/javascript" crossorigin="anonymous" src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`} />

      <section className="text-gray-600 body-font relative min-h-screen">
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="px-5 py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Delivery Address</h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Full Name</label>
                  <input onChange={handleChange} value={name} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email Address</label>
                  <input value={email} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8" readOnly />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="mobile" className="leading-7 text-sm text-gray-600">Mobile Number</label>
                  <input onChange={handleChange} value={mobile} type="text" id="mobile" name="mobile" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
                  <input onChange={handleChange} value={pincode} type="text" id="pincode" name="pincode" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="address" className="leading-7 text-sm text-gray-600">Full Address</label>
                  <textarea onChange={handleChange} value={address} type="text" id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8"></textarea>
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="city" className="leading-7 text-sm text-gray-600">Town/City</label>
                  <input onChange={handleChange} value={city} type="text" id="city" name="city" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                  <input value={state} type="text" id="state" name="state" readOnly className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <section className="text-gray-600 body-font overflow-hidden md:w-full">
                    <div className="container px-5 pb-20 pt-5 mx-auto">
                      <div className="-my-8 divide-y-2 divide-gray-100">
                        {
                          Object.keys(props.cart).map((k) => {
                            return <div key={k} className="py-8 flex flex-wrap md:flex-nowrap">
                              <div className="md:w-64 w-full md:mb-0 mb-6 md:mr-5 flex-shrink-0 flex flex-col">
                                <img src={props.cart[k].image} width={400} height={260} alt={"Image"} />
                              </div>
                              <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-700 mb-2">{props.cart[k].name}</h2>
                                <h2 className="font-normal text-gray-500">Size : {props.cart[k].size}</h2>
                                <h2>Color : <span className={`capitalize ${(props.cart[k].variant === "black" || props.cart[k].variant === "white") ? `text-black` : `text-${props.cart[k].variant}-500`}`}></span>{props.cart[k].variant}</h2>
                                <p className="text-xl font-bold text-gray-900 title-font my-3">₹{props.cart[k].price}</p>
                                <p className="flex font-semibold justify-start align-baseline text-justify text-xl mt-2">
                                  <BiMinusCircle onClick={() => { props.removeFromCart(k, 1, props.cart[k].price, props.cart[k].name, props.cart[k].size, props.cart[k].variant) }} className='mr-2 text-2xl cursor-pointer' />
                                  {props.cart[k].qty}
                                  <BiPlusCircle onClick={() => { props.addToCart(k, 1, props.cart[k].price, props.cart[k].name, props.cart[k].size, props.cart[k].variant) }} className='ml-2 text-2xl cursor-pointer' /></p>
                              </div>
                            </div>
                          })
                        }
                      </div>
                    </div>
                  </section>

                  <h1 className="sm:text-xl text-xl text-center font-medium text-gray-900 mb-5">SubTotal ({props.items} Items) : ₹{props.subTotal}</h1>
                </div>
              </div>

              <div className="p-2 w-full">
                <button disabled={disabled} onClick={initiatePayment} className="w-full disabled:cursor-not-allowed disabled:bg-gray-500 flex justify-center mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 text-lg">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Checkout