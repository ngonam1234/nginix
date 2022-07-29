import React, { useState, useEffect } from 'react';

const size = 3;

const PeopleForm = ({ currentStep = null, setCurrentStep = f => f, peopleForm = null, changePeopleForm = f => f, peopleErrors = null, submit = f => f }) => {
  const [page, setPage] = useState(1);
  if (currentStep !== 2) return (<></>);
  window.scrollTo(0, 0);
  return (
    <>
      <section className="mt-6 p-6 bg-white rounded-md border-2 border-gray-200">
        <form id="peopleForm" onSubmit={submit}>
          {
            peopleForm.map((item, index) => <FormInput key={index} obj={item} page={page} index={index} error={peopleErrors && peopleErrors[index]} changePeopleForm={changePeopleForm} />)
          }
        </form>
        <div className="flex justify-center w-full">
          {peopleForm.length > size ?
            [...Array(Math.ceil(peopleForm.length / size))].map((item, index) => <Page key={index} index={index} page={page} peopleErrors={peopleErrors} setPage={setPage} />)
            : null}
        </div>
      </section>
      <div className="flex justify-between mt-6">
        <button onClick={() => { setPage(1); setCurrentStep(prev => prev - 1); }} className="mr-6 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
        </button>
        <button
          type="submit"
          form="peopleForm"
          className="inline-flex items-center justify-center h-10 px-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
        >
          Tiếp theo
        </button>
      </div>
    </>
  );
};

const FormInput = ({ obj = null, page = null, index = null, error = null, changePeopleForm = f => f }) => {
  if ((index + 1) <= (page - 1) * size || (index + 1) > (page) * size) return null;
  return (
    <>
      <h2 className={`text-lg font-semibold text-gray-700 capitalize dark:text-white`}>Thông tin người {index + 1}</h2>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 mb-6">
        <div>
          <label className="text-gray-900 font-medium" htmlFor="fullName">Tên đầy đủ</label>
          <input value={obj.fullName} onChange={e => changePeopleForm(e, index)} placeholder="Nguyễn Văn A" name="fullName" id="fullName" type="text" required
            className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring placeholder-gray-600 placeholder-opacity-30 focus:placeholder-opacity-0 ${error && error.fullName && 'border-red-500'}`} />
          {error && error.fullName && <ErrorMessage message={error.fullName} />}
        </div>

        <div>
          <label className="text-gray-900 font-medium" htmlFor="gender">Giới tính</label>
          <select value={obj.gender} onChange={e => changePeopleForm(e, index)} name="gender" id="gender" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring appearance-none">
            <option value={1}>Nam</option>
            <option value={0}>Nữ</option>
          </select>
        </div>

        <div>
          <label className="text-gray-900 font-medium" htmlFor="dateOfBirth">Ngày sinh</label>
          <input value={obj.dateOfBirth} onChange={e => changePeopleForm(e, index)} name="dateOfBirth" id="dateOfBirth" type="date" required
            className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring ${error && error.dateOfBirth && 'border-red-500'}`} />
          {error && error.dateOfBirth && <ErrorMessage message={error.dateOfBirth} />}
        </div>

        <div>
          <label className="text-gray-900 font-medium" htmlFor="passportCard">Số hộ chiếu</label>
          <input value={obj.passportCard} onChange={e => changePeopleForm(e, index)} placeholder="123456789012" name="passportCard" id="passportCard" type="text" required
            className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring placeholder-gray-600 placeholder-opacity-30 focus:placeholder-opacity-0 ${error && error.passportCard && 'border-red-500'}`} />
          {error && error.passportCard && <ErrorMessage message={error.passportCard} />}
        </div>
      </div>
    </>
  );
};

const Page = ({ index = null, page = null, peopleErrors = null, setPage = null }) => {
  const [noError, setNoError] = useState(true);
  useEffect(() => {
    const val = [...Array(size)].reduce((res, val, valIndex) => res && (valIndex + size * index >= peopleErrors.length || Object.keys(peopleErrors[valIndex + size * index]).length === 0 && peopleErrors[valIndex + size * index].constructor === Object), true);
    setNoError(val);
  }, [peopleErrors]);
  if ((index + 1) === page) {
    return (
      <div className="flex flex-col relative w-6 h-6 mr-6 mb-6">
        <button className="absolute flex items-center px-4 py-2 mx-1 text-black text-bold bg-gray-400 rounded-md focus:outline-none mt-2">
          {index + 1}
        </button>
        {/* {!noError && <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce absolute h-6 w-6 z-10 ml-3 mt-14 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>} */}
      </div>
    );
  }
  return (
    <div className="flex flex-col relative w-6 h-6 mr-6 mb-6">
      <button className={`absolute flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md hover:bg-indigo-600 hover:text-white focus:outline-none mt-2 ${!noError && 'text-red-500 border border-red-500'}`}
        onClick={() => { setPage(index + 1); window.scrollTo(0, 0); }}>
        {index + 1}
      </button>
      {!noError && <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce absolute h-6 w-6 z-10 ml-3 mt-14 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>}
    </div>
  );
};

const ErrorMessage = ({ message = null }) => {
  return (
    <div className="flex">
      <div className="mt-1 mr-1 relative flex h-4 w-4">
        <span className="absolute rounded-full h-full w-full text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </span>
        <span className="absolute animate-ping rounded-full h-full w-full border border-red-500"></span>
      </div>
      <p className="mt-1 text-red-500 text-sm">{message}</p>
    </div>
  );
};

export default PeopleForm;
