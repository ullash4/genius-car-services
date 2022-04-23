import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
      console.log(data)
      const url = `http://localhost:5000/service`;
      fetch(url,{
          method: 'POST',
          headers: {
              'content-type' : 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(res=> res.json())
      .then(result=> {
          console.log(result);
      })
      alert('user added')
    };
  return (
    <>
      <div className="w-50 mx-auto">
        <h1>Please add Service</h1>
        <form className="d-flex flex-column p-2" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Service Name" className="mb-2 rounded-3"
            {...register("name", { required: true, maxLength: 20 })}
          />
          <textarea placeholder="Description" className="mb-2 rounded-3" {...register("description")} />
          <input placeholder="Price" className="mb-2 rounded-3" type="number" {...register("price")} />
          <input placeholder="Photo URL" className="mb-2 rounded-3" type="text" {...register("img")} />
         <button className="btn btn-primary" type="submit">Add User</button>
        </form>
      </div>
    </>
  );
};

export default AddService;
