"use client"
import Head from 'next/head';
import { useEffect } from 'react';

declare global {
    interface Window {
        fbAsyncInit: () => void;
        FB: any;
    }
}

export default function FacebookLoginButton() {

    // useEffect(() => {
    //     // Load the Facebook SDK asynchronously
    //     window.fbAsyncInit = function () {
    //         FB.init({
    //             appId: "6187261777975489",
    //             cookie: true,
    //             xfbml: true,
    //             version: 'v17.0',
    //         });
    //         FB.getLoginStatus(function (response) {
    //             statusChangeCallback(response);
    //         });
    //     };

    //     (function (d, s, id) {
    //         let js,
    //             fjs = d.getElementsByTagName(s)[0];
    //         if (d.getElementById(id)) {
    //             return;
    //         }
    //         js = d.createElement(s);
    //         js.id = id;
    //         js.src = 'https://connect.facebook.net/en_US/sdk.js';
    //         fjs.parentNode.insertBefore(js, fjs);
    //     })(document, 'script', 'facebook-jssdk');

    // }, []);

    // const statusChangeCallback = (response) => {
    //     if (response.status === 'connected') {
    //         console.log(response);
    //     } else {
    //         console.log('Not authenticated');
    //     }
    // };

    // const handleLogin = () => {
    //     FB.login(function (response) {
    //         statusChangeCallback(response);
    //     }, { scope: 'public_profile,email,pages_show_list,business_management,instagram_basic,instagram_manage_comments,instagram_manage_messages,page_events,pages_read_engagement,pages_manage_metadata,pages_messaging' });
    // };




    return (
        <div>
            <div className="fb-login-button" data-scope="public_profile,email,pages_show_list,business_management,instagram_basic,instagram_manage_comments,instagram_manage_messages,page_events,pages_read_engagement,pages_manage_metadata,pages_messaging" data-width="" data-size="" data-button-type="" data-layout="" data-auto-logout-link="false" data-use-continue-as="false"></div>
            {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleLogin}>Facebook Login</button> */}
            <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v17.0&appId=6187261777975489&autoLogAppEvents=1" nonce="YImqFD4m"></script>
        </div>
    );
}
