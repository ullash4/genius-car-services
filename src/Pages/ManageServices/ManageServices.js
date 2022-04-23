import React from "react";
import useServices from "../../Hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure to delete it ?");
    if (confirm) {
        
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const rest = services.filter(service=> service._id !== id)
        setServices(rest);
        });

        
    }
  };
  return (
    <div className="text-center mt-5">
      <h1>Our Services {services.length}</h1>
      {services.map((service) => (
        <div key={service._id}>
          <h1>
            {service.name} --{" "}
            <button onClick={() => handleDelete(service._id)}>X</button>{" "}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
