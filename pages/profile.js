import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = (props) => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const tst = (type, msg) => {
    if (type == 'success') {
      toast.success(`${msg}`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(`${msg}`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  useEffect(() => {
    const myUser = JSON.parse(localStorage.getItem('myUser'));
    if (!myUser) {
      router.push("/auth");
    }
    fetchUser(myUser.token);
  }, []);

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
      setMobile(response.data.mobile);
      setAddress(response.data.address);
      setCity(response.data.city);
      setPincode(response.data.pincode);
    } else {
      tst("error", response.message);
    }
  }

  const checkError = (resp, mode) => {
    if (resp.type === "success") {
      tst("success", `${mode} updated successfully`);
      setTimeout(() => {
        router.push("/profile");
      }, 2000);
    } else {
      tst("error", resp.message);
    }
  }

  const updateUser = async (data, path) => {
    let updated = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return await updated.json();
  }

  const updateDetails = async () => {
    let data = {
      token: JSON.parse(localStorage.getItem('myUser')).token,
      name: name,
      mobile: mobile,
      address: address,
      pincode: pincode,
      city: city
    }
    let response = await updateUser(data, "updateUser");
    checkError(response, "Details");
  }
  const updatePassword = async () => {
    let data = {
      token: JSON.parse(localStorage.getItem('myUser')).token,
      password: currentPassword,
      newPassword: newPassword,
      confirmNewPassword: confirmNewPassword
    }
    if (currentPassword && newPassword && confirmNewPassword) {
      let response = await updateUser(data, "updatePassword");
      checkError(response, "Password");
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } else {
      tst("error", "Please fill all the fields");
    }
  }

  const handleChange = async (e) => {
    e.target.name == "name" ? setName(e.target.value) : null;
    e.target.name == "mobile" ? setMobile(e.target.value) : null;
    e.target.name == "address" ? setAddress(e.target.value) : null;
    e.target.name == "city" ? setCity(e.target.value) : null;
    e.target.name == "currentPassword" ? setCurrentPassword(e.target.value) : null;
    e.target.name == "newPassword" ? setNewPassword(e.target.value) : null;
    e.target.name == "confirmNewPassword" ? setConfirmNewPassword(e.target.value) : null;
    if (e.target.name == "pincode") {
      setPincode(e.target.value);
      if (e.target.value.length == 6) {
        let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
        let pinData = await pins.json();
        if (Object.keys(pinData).includes(e.target.value)) {
          setCity(pinData[e.target.value][0]);
        } else {
          setCity('');
        }
      } else {
        setCity('');
      }
    }
  }
  return (
    <>
      <Head>
        <title>Profile | {props.name}</title>
      </Head>

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
        <div className="px-5 md:px-0 pt-16 pb-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Update Your Account</h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Full Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" value={name} onChange={handleChange} />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="mobile" className="leading-7 text-sm text-gray-600">Mobile Number</label>
                  <input type="text" id="mobile" name="mobile" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" value={mobile} onChange={handleChange} />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="address" className="leading-7 text-sm text-gray-600">Full Address</label>
                  <textarea type="text" id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" value={address} onChange={handleChange}></textarea>
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
                  <input type="text" id="pincode" name="pincode" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" value={pincode} onChange={handleChange} />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="city" className="leading-7 text-sm text-gray-600">Town/City</label>
                  <input type="text" id="city" name="city" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" value={city} onChange={handleChange} />
                </div>
              </div>
              <div className="p-2 w-full">
                <button onClick={updateDetails} className="w-full flex justify-center mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 text-lg">Update Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 md:px-0 pb-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h1 className="sm:text-2xl text-xl text-gray-900">Change the password</h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email Address</label>
                  <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8" value={email} readOnly />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="currentPassword" className="leading-7 text-sm text-gray-600">Current Password</label>
                  <input type="password" id="currentPassword" name="currentPassword" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" value={currentPassword} onChange={handleChange} />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="newPassword" className="leading-7 text-sm text-gray-600">New Password</label>
                  <input type="password" id="newPassword" name="newPassword" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" value={newPassword} onChange={handleChange} />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="confirmNewPassword" className="leading-7 text-sm text-gray-600">Confirm New Password</label>
                  <input type="password" id="confirmNewPassword" name="confirmNewPassword" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" value={confirmNewPassword} onChange={handleChange} />
                </div>
              </div>
              <div className="p-2 w-full">
                <button onClick={updatePassword} className="w-full flex justify-center mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 text-lg">Change Password</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile