import React from 'react';

const UserInformation = () => {
  return (
    <section className="h-full bg-white bg-opacity-50 border-gray-800">
      <form className="container max-w-2xl mx-auto border-gray-300  md:w-6/12">
        <div className="p-4 bg-white  border-gray-300 rounded-lg bg-opacity-5">
         
            <div className="px-18">
              <a href="#" className=" mx-auto">
                {/* <img
                  alt="profile"
                  src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                  className="mx-auto object-cover rounded-full h-16 w-16 "
                /> */}
              </a>
              <h1 className="text-gray-800 text-3xl text-center">Thông tin tài khoản </h1>
            </div>
          </div>
      
        <div className="space-y-2 bg-white ">
          {/* <div className="items-center w-full p-4 space-y-4 text-gray-700 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Account</h2>
            <div className="max-w-sm mx-auto md:w-2/3">
              <div className=" relative ">
                <input
                  type="text"
                  id="user-info-email"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  placeholder="Username"
                />
              </div>
            </div>
          </div> */}
          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-700 md:inline-flex md:space-y-0 border-gray-300">
            {/* <h2 label="Personal info" className="max-w-sm mx-auto md:w-1/3">Personal info</h2> */}
            <div className="max-w-sm mx-auto space-y-5 md:min-w-full">
              <div className="flex">
              <h2 label="name" className="max-w-sm  text-left py-2 md:w-1/5">Họ tên</h2>
                <div className=" relative md:w-4/5">
                  <input
                    type="text"
                    id="user-info-name"
                    className="  rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="flex">
                <h2 label="birthday" className="max-w-sm  text-left py-2 md:w-1/5">Ngày sinh</h2>
                <div className=" relative md:w-4/5">
                  <input
                    type="text"
                    id="user-info-Date-of-Birth"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    placeholder="Date of birth"
                  />
                </div>
              </div>
              <div className="flex">
                 <h2 label="gender" className="max-w-sm  text-left py-2 md:w-1/5">Giới tính</h2>
                <div className=" relative md:w-4/5">
                  <input
                    type="text"
                    id="user-info-gender"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    placeholder="Gender"
                  />
                </div>
              </div>
              <div className="flex">
                <h2 label="phonenumber" className="max-w-sm  text-left py-2 md:w-1/5">Số điện thoại</h2>
                <div className=" relative md:w-4/5 ">
                  <input
                    type="text"
                    id="user-info-phone"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div className="flex">
              <h2 label="email" className="max-w-sm  text-left py-2 md:w-1/5">Email</h2>
                <div className=" relative md:w-4/5">
                  <input
                    type="text"
                    id="user-info-email"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex">
              <h2 label="address" className="max-w-sm  text-left py-2 md:w-1/5">Địa chỉ</h2>
                <div className=" relative md:w-4/5">
                  <input
                    type="text"
                    id="user-info-address"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    placeholder="Address"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="items-center w-full p-4 space-y-5 text-gray-700  md:space-y-0">
            {/* <h2 className="max-w-sm mx-auto md:w-4/12">Account</h2> */}
           
            <div className="max-w-sm mx-auto space-y-5 md:min-w-full">
            <div className="flex">
              <h2 label="username" className="max-w-sm  text-left py-2 md:w-1/5">Tài khoản</h2>
                <div className=" relative md:w-3/5">
                  <input
                    type="text"
                    id="user-info-username"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="flex">
              <h2 label="password" className="max-w-sm  text-left py-2 md:w-1/5">Mật khẩu</h2>
                <div className=" relative md:w-4/5 md:inline-flex ">
                <input
                  type="text"
                  id="user-info-password"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  placeholder="Password"
                />
                <div className="text-center md:min-w-min px-6 ">
              <button
                type="button"
                className="py-2 px-4  bg-gray-500 hover:bg-gray-600 focus:ring-gray-600 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-1  rounded-lg "
              >
                Change
              </button>
            </div>
              </div>
              </div>
            </div>
            
          </div>
          <hr />
          <div className=" px-4 mx-auto pb-5 text-gray-500 md:w-2/12">
            <button
              type="submit"
              className="py-2 px-4  bg-gray-500 hover:bg-gray-600 focus:ring-gray-400 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
export default UserInformation;

{/* <div 
className="h-screen"
style={{  
backgroundImage: "url(" + "https://img.nhandan.com.vn/Files/Images/2021/08/04/logond_ava-1628079489138.jpg" + ")",
backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'
}}
>
  Hello World
</div>
 */}

      //     <div className="p-4 bg-white  border-gray-300 rounded-lg bg-opacity-5">
           
      //         <div className="px-18">
      //           <a href="#" className=" mx-auto">
      //             {/* <img
      //               alt="profile"
      //               src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
      //               className="mx-auto object-cover rounded-full h-16 w-16 "
      //             /> */}
      //           </a>
      //           <h1 className="text-gray-800 text-3xl text-center">Thông tin tài khoản </h1>
      //         </div>
      //       </div>
        
      //     <div className="space-y-2 bg-white ">
      //       {/* <div className="items-center w-full p-4 space-y-4 text-gray-700 md:inline-flex md:space-y-0">
      //         <h2 className="max-w-sm mx-auto md:w-1/3">Account</h2>
      //         <div className="max-w-sm mx-auto md:w-2/3">
      //           <div className=" relative ">
      //             <input
      //               type="text"
      //               id="user-info-email"
      //               className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
      //               placeholder="Username"
      //             />
      //           </div>
      //         </div>
      //       </div> */}
      //       <hr />
      //       <div className="items-center w-full p-4 space-y-4 text-gray-700 md:inline-flex md:space-y-0 border-gray-300">
      //         {/* <h2 label="Personal info" className="max-w-sm mx-auto md:w-1/3">Personal info</h2> */}
      //         <div className="max-w-sm mx-auto space-y-5 md:min-w-full">
      //           <div className="flex">
      //           <h2 label="name" className="max-w-sm  text-left py-2 md:w-1/5">Họ tên</h2>
      //             <div className=" relative md:w-4/5">
      //               <input
      //                 type="text"
      //                 id="user-info-name"
      //                 className="  rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
      //                 placeholder="Name"
      //               />
      //             </div>
      //           </div>
      //           <div className="flex">
      //             <h2 label="birthday" className="max-w-sm  text-left py-2 md:w-1/5">Ngày sinh</h2>
      //             <div className=" relative md:w-4/5">
      //               <input
      //                 type="text"
      //                 id="user-info-Date-of-Birth"
      //                 className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
      //                 placeholder="Date of birth"
      //               />
      //             </div>
      //           </div>
      //           <div className="flex">
      //              <h2 label="gender" className="max-w-sm  text-left py-2 md:w-1/5">Giới tính</h2>
      //             <div className=" relative md:w-4/5">
      //               <input
      //                 type="text"
      //                 id="user-info-gender"
      //                 className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
      //                 placeholder="Gender"
      //               />
      //             </div>
      //           </div>
      //           <div className="flex">
      //             <h2 label="phonenumber" className="max-w-sm  text-left py-2 md:w-1/5">Số điện thoại</h2>
      //             <div className=" relative md:w-4/5 ">
      //               <input
      //                 type="text"
      //                 id="user-info-phone"
      //                 className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
      //                 placeholder="Phone number"
      //               />
      //             </div>
      //           </div>
      //           <div className="flex">
      //           <h2 label="email" className="max-w-sm  text-left py-2 md:w-1/5">Email</h2>
      //             <div className=" relative md:w-4/5">
      //               <input
      //                 type="text"
      //                 id="user-info-email"
      //                 className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
      //                 placeholder="Email"
      //               />
      //             </div>
      //           </div>
      //           <div className="flex">
      //           <h2 label="address" className="max-w-sm  text-left py-2 md:w-1/5">Địa chỉ</h2>
      //             <div className=" relative md:w-4/5">
      //               <input
      //                 type="text"
      //                 id="user-info-address"
      //                 className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
      //                 placeholder="Address"
      //               />
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <hr />
      //       <div className="items-center w-full p-4 space-y-5 text-gray-700  md:space-y-0">
      //         {/* <h2 className="max-w-sm mx-auto md:w-4/12">Account</h2> */}
             
      //         <div className="max-w-sm mx-auto space-y-5 md:min-w-full">
      //         <div className="flex">
      //           <h2 label="username" className="max-w-sm  text-left py-2 md:w-1/5">Tài khoản</h2>
      //             <div className=" relative md:w-3/5">
      //               <input
      //                 type="text"
      //                 id="user-info-username"
      //                 className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
      //                 placeholder="Username"
      //               />
      //             </div>
      //           </div>
      //           <div className="flex">
      //           <h2 label="password" className="max-w-sm  text-left py-2 md:w-1/5">Mật khẩu</h2>
      //             <div className=" relative md:w-4/5 md:inline-flex ">
      //             <input
      //               type="text"
      //               id="user-info-password"
      //               className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
      //               placeholder="Password"
      //             />
      //             <div className="text-center md:min-w-min px-6 ">
      //           <button
      //             type="button"
      //             className="py-2 px-4  bg-gray-500 hover:bg-gray-600 focus:ring-gray-600 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-1  rounded-lg "
      //           >
      //             Change
      //           </button>
      //         </div>
      //           </div>
      //           </div>
      //         </div>
              
      //       </div>
      //       <hr />
      //       <div className=" px-4 mx-auto pb-5 text-gray-500 md:w-2/12">
      //         <button
      //           type="submit"
      //           className="py-2 px-4  bg-gray-500 hover:bg-gray-600 focus:ring-gray-400 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      //         >
      //           Save
      //         </button>
      //       </div>
      //     </div>
      //   </form>
      // </section>
      // </div>
