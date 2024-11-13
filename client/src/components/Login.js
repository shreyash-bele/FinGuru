import React from "react";
import Footer from "./Footer";

export default function Login()
{
    return(
        <>
        <div class="w-full max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg mt-8">
    <h1 class="text-3xl font-bold text-center mb-8">Sign In</h1>
    <form>
      <div class="mb-4">
        <label class="block mb-2 text-sm font-medium text-gray-700" for="email">
          <svg class="inline-block w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM4 8l8 5 8-5v10H4V8z"/>
          </svg>
          Email Address
        </label>
        <input class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-purple-500" type="email" id="email" placeholder="Email Address"/>
      </div>
      <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-700" for="password">
          <svg class="inline-block w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a5 5 0 0 1 5 5v1a7 7 0 0 1 7 7v3h-4v-3a3 3 0 0 0-6 0v3H4v-3a7 7 0 0 1 7-7V7a5 5 0 0 1 5-5zm3 10h4a5 5 0 0 0-5-5V7a3 3 0 0 0-6 0v1H9a5 5 0 0 0-5 5v1h12v-1a3 3 0 0 1 3-3z"/>
          </svg>
          Password
        </label>
        <input class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-purple-500" type="password" id="password" placeholder="Password"/>
      </div>
      <div class="mb-4">
        <button class="w-full py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75">
          Login
        </button>
      </div>
      <div class="text-center text-gray-500 text-sm mb-4">or sign in with</div>
      <div class="flex justify-center space-x-4">
        <button class="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.285 10.39h-7.508v3.572h4.334c-.561 2.154-2.292 3.572-4.334 3.572-2.668 0-4.907-2.298-4.907-5.143 0-2.844 2.239-5.143 4.907-5.143 1.178 0 2.268.392 3.138 1.052L17.9 6.034C16.656 5.047 14.99 4.5 13.157 4.5 9.697 4.5 6.865 7.332 6.865 10.793c0 3.46 2.832 6.293 6.292 6.293 3.497 0 6.211-2.755 6.211-6.26 0-.432-.041-.854-.123-1.252z"/>
          </svg>
          <span>Google</span>
        </button>
        <button class="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.408.593 24 1.325 24h11.494v-9.293H9.692v-3.623h3.127V8.413c0-3.1 1.894-4.787 4.66-4.787 1.325 0 2.463.098 2.795.143v3.24h-1.918c-1.507 0-1.8.717-1.8 1.767v2.318h3.6l-.47 3.623h-3.13V24h6.136C23.406 24 24 23.408 24 22.676V1.324C24 .593 23.408 0 22.675 0z"/>
          </svg>
          <span>Facebook</span>
        </button>
      </div>
    </form>
  </div>
  <Footer/>
  </>
    );
}
