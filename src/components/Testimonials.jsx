export const Testimonials = () => {
    return (
      <section className='my-20'>
          <h1 className="text-2xl text-center font-semibold text-black dark:text-slate-100 mb-5 underline underline-offset-8">Review About Stock Courses</h1>    
          <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                      <p className="my-4 font-light">The course was amazing and very informative. Everything was explained clearly and in a simplied way. I personally really liked the course as it was beginner-friendly."</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div className="text-black">Akshay Nair</div>
                          <div className="text-sm font-light text-gray-500 dark:text-gray-400">MBA Graduate</div>
                      </div>
                  </figcaption>    
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation On Fundamental Analytics</h3>
                      <p className="my-4 font-light">"Well explained, I have learned a lot and was able to put it in practice. Go to essential without being too complicated."</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1525085475165-c6808cdb005e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div  className="text-black">Prab Sharma</div>
                          <div className="text-sm font-light text-gray-500 dark:text-gray-400">Technical Analysis Stock Trading Company</div>
                      </div>
                  </figcaption>    
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Indicating Indicaters</h3>
                      <p className="my-4 font-light">Great course on investing. It gives you the necessary tools to start investing and get the necessairy knowhow of it.</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div  className="text-black">Krish Thakkar ,MBA</div>
                          <div className="text-sm font-light text-gray-500 dark:text-gray-400">Top 1% Instructor & Millionaire Investor Club. Invest & Trade!</div>
                      </div>
                  </figcaption>    
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
                      <p className="my-4 font-light">You have many examples that can be used to create a fast prototype for your team."</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div  className="text-black">Saurav Chaudhari</div>
                          <div className="text-sm font-light text-gray-500 dark:text-gray-400">Investor in Big FAANG Companies</div>
                      </div>
                  </figcaption>    
              </figure>
          </div>
      </section>
    )
  }