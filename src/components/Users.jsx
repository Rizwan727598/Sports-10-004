import React, { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(
    Array.isArray(loadedUsers) ? loadedUsers : []
  );

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This user will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-five-sandy.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);

              Swal.fire({
                title: "Deleted!",
                text: "The user has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the user.",
              icon: "error",
            });
            console.error("Error deleting user:", error);
          });
      }
    });
  };

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold mb-5">Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-left">#</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Last SignIn</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) &&
              users.map((user, index) => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-100 cursor-pointer transition-all duration-200"
                >
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.lastSignInTime}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      aria-label="Edit User"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      aria-label="Delete User"
                    >
                      Delete
                    </button>
                    <Link
                      to={`/details/${user._id}`}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
