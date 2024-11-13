import React from "react";

export default function Footer()
{
    return(
        <footer class="bg-gray-900 text-white pt-10 sm:mt-10">
        <div class="container mx-auto text-center pb-6">
            <div class="pb-6">
                <h2 class="text-xl font-semibold">Subscribe to our newsletter</h2>
                <div class="flex justify-center mt-4">
                    <input type="email" placeholder="Input your email" class="p-2 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                    <button class="p-2 rounded-r-md bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">Subscribe</button>
                </div>
            </div>
            <div class="flex justify-center space-x-6 text-gray-400 py-6">
                <a href="#" class="hover:text-gray-200">Home</a>
                <a href="#" class="hover:text-gray-200">Gamified Learning</a>
                <a href="#" class="hover:text-gray-200">Budget Planner</a>
                <a href="#" class="hover:text-gray-200">Help Center</a>
                <a href="#" class="hover:text-gray-200">Contact us</a>
                <a href="#" class="hover:text-gray-200">FAQs</a>
                <a href="#" class="hover:text-gray-200">FinCoach</a>
            </div>
            <div class="flex justify-center space-x-6 text-gray-400 py-6">
                <div class="relative">
                    <select class="bg-gray-800 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Marathi</option>
                    </select>
                </div>
            </div>
            <div class="border-t border-gray-700 pt-6">
                <div class="flex justify-center space-x-6 text-gray-400 py-6">
                    <a href="#" class="hover:text-gray-200"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="hover:text-gray-200"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="hover:text-gray-200"><i class="fab fa-linkedin"></i></a>
                    <a href="#" class="hover:text-gray-200"><i class="fab fa-youtube"></i></a>
                </div>
                
            </div>
        </div>
    </footer>

    );
}