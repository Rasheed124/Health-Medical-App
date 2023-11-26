import React from "react";

const CreateMedication = () => {
  return (
    <div className=" w-full">
      <h2 className=" py-4 text-xl text-[#0a7dcf] font-bold">
        {" "}
        Create A Medication
      </h2>
      <form action=" " className=" max-w-[400px]">
        <div className=" w-full">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder=" Medication Name"
            className=" w-full border border-black py-2 pl-3 mt-2 rounded-md "
          />
        </div>
        <div className=" pt-5">
          <label htmlFor="">Prescription</label> <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="4"
            className=" w-full resize-none mt-2 border border-black rounded-md"
          ></textarea>
        </div>
        <div className=" pt-5">
          <label htmlFor="">Date/Day</label>
          <div className=" flex w-full gap-4 pt-2">
            <input
              type="date"
              className=" w-full py-2 pl-2 rounded-md border border-black"
            />
            <input
              type="date"
              className=" w-full py-2 pl-2 rounded-md border border-black"
            />
          </div>
        </div>
        <div className=" pt-5">
          <label htmlFor="">Time/Frequency</label> <br />
          <div className=" pt-2">
            <input type="radio" name="group" className=" mr-2" />
            <label htmlFor="">Morning</label>
          </div>
          <div className=" pt-2">
            <input type="radio" name="group" className=" mr-2" />
            <label htmlFor="">Afternoon</label>
          </div>
          <div className=" pt-2">
            <input type="radio" name="group" className=" mr-2" />
            <label htmlFor="">Evening</label>
          </div>
        </div>
        <div className=" pt-5">
          <label htmlFor="">Note</label> <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            className=" w-full resize-none rounded-md mt-2 border border-black"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default CreateMedication;
