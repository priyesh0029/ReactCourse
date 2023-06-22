import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);

  const userDetails = useSelector(store => store.user.items)

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const data = {
    name,
    email,
    image
  }

  const handleSubmit = async() => {

    try {
        const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("image", image);

      const accessToken = localStorage.getItem("user");

      const result = await axios.post("http://localhost:3000/updateProfile", formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      });
        
            console.log(result); // Response data
      
    } catch (error) {
      console.error(error);
      if(error){

          swal({
              title: error.response.data,
              icon: "error",
              button: "OK",
            });
      }
    }



    // Perform form submission logic here
    // You can access the entered name, email, and the selected image in the respective state variables (name, email, image)
    // Send the form data to the server or perform any other actions
    console.log("Submitted:", name, email, image);
  };

  return (
    <div className="flex">
      <div className="mx-16">
        <div className="w-96 p-2 m-2 bg-gray-300 shadow-md min-h-[23rem]">
          <img alt="image" src={image} />

          <h2 className="font-bold text-2xl">{userDetails && userDetails.name}</h2>
          <h2>{userDetails && userDetails.email}</h2>
        </div>
      </div>

       <form onSubmit={handleSubmit} className="max-w-sm mx-auto my-16">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block mb-2 font-medium">
            Profile Image:
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            className="border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            onChange={handleImageChange}
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" 
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Profile;
