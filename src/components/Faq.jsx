
import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs = [
        {
          "id": 1,
          "question": "What kind of stock data does your website provide?",
          "answer": "Our website provides comprehensive stock data, including real-time stock prices, historical price charts, company financials, analyst ratings, and news updates. Whether you're a novice investor or a seasoned trader, you'll find valuable insights to make informed decisions."
        },
        {
          "id": 2,
          "question": "How frequently is the stock data updated?",
          "answer": "We update our stock data continuously throughout the trading day to ensure you have access to the most current information. Our data is sourced from reliable financial data providers and is refreshed in real-time, allowing you to stay ahead of market trends and developments."
        },
        {
          "id": 3,
          "question": "Can I create custom watchlists or portfolios on your website?",
          "answer": "Yes, absolutely! Our platform offers robust portfolio management tools that allow you to create custom watchlists, track your investments, and analyze portfolio performance over time. You can conveniently organize stocks, set price alerts, and monitor your holdings all in one place."
        },{
          "id": 4,
          "question": "Is my personal and financial information secure on your website?",
          "answer": "Protecting your privacy and security is our top priority. We employ industry-standard encryption protocols to safeguard your personal and financial information. Additionally, we adhere to strict data protection regulations and continuously update our security measures to mitigate any potential risks. You can trust that your data is safe with us."
        }
    ];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold text-black dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white text-black dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              {faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} /> 
              )) }
            </div>
      </section>
  )
}