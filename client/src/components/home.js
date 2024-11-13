import React from "react";
import Footer from "./Footer";
import home_page from "../assets/homepage.png";
import finacial_1 from "../assets/finacial.jpeg";
import finacial_2 from "../assets/finacial2.jpeg";
import finacial_3 from "../assets/financial3.jpeg";
import finacial_4 from "../assets/finacial4.jpeg";





export default function Home() {
    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white mt-3">
        <section className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="text-center lg:text-left max-w-2xl lg:mr-8">
      <h1 className="text-5xl font-extrabold text-blue-700">FinGuru</h1>
      <h2 className="text-4xl font-extrabold text-blue-700 mt-4">New Way to Learn Finance!!</h2>
      <p className="text-gray-500 mt-6">
        We break down complicated financial topics into an easy-to-use website with the mission of teaching teens about financial independence. An overwhelming amount of teens aren't taught essential skills because of the lack of personal finance courses in schools.
      </p>
    </div>
    <div className="mt-10 lg:mt-0">
      <img className="w-full h-auto max-w-lg" src={home_page} alt="Financial Literacy Illustration" />
    </div>
  </section>

            <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <p className="text-4xl font-bold text-gray-900">11.5</p>
                        <p className="text-xl font-semibold text-gray-900">TRILLION</p>
                        <p className="text-gray-500 mt-2">is the total amount of debt that Indian consumers owe</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-gray-900">52%</p>
                        <p className="text-xl font-semibold text-gray-900">TEENS</p>
                        <p className="text-gray-500 mt-2">said they want to learn more about how to manage their money</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-gray-900">33%</p>
                        <p className="text-xl font-semibold text-gray-900">PARENTS</p>
                        <p className="text-gray-500 mt-2">talk to their kids about money regularly</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-gray-900">85%</p>
                        <p className="text-xl font-semibold text-gray-900">PARENTS</p>
                        <p className="text-gray-500 mt-2">thought that a course in personal finance should be a high school graduation requirement</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-12">
                <h2 className="text-3xl font-bold text-center mb-8">FinGuru Topics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <img className="w-20 h-20 mx-auto mb-4" src={finacial_1} alt="Financial Plan" />
                        <h3 className="text-xl font-semibold mb-2">Financial Plan</h3>
                        <p className="text-gray-500 mb-4">Learn how to set financial goals and tips to get started</p>
                        <button className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Learn More</button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <img className="w-20 h-20 mx-auto mb-4" src={finacial_2} alt="Savings" />
                        <h3 className="text-xl font-semibold mb-2">Savings</h3>
                        <p className="text-gray-500 mb-4">Learn how to be frugal and save up money for long-term goals</p>
                        <button className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Learn More</button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <img className="w-20 h-20 mx-auto mb-4" src={finacial_3} alt="Investing" />
                        <h3 className="text-xl font-semibold mb-2">Investing</h3>
                        <p className="text-gray-500 mb-4">Learn different types of investments and how to manage risk</p>
                        <button className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Learn More</button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <img className="w-20 h-20 mx-auto mb-4" src={finacial_4} alt="Credit Basics" />
                        <h3 className="text-xl font-semibold mb-2">Credit Basics</h3>
                        <p className="text-gray-500 mb-4">Learn the importance of credit and its multiple uses</p>
                        <button                 className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >Learn More</button>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer></Footer>
        </>
        
    );
}
