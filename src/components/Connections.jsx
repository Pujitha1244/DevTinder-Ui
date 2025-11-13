import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/contants";
import { addConnections } from "../utils/connectionSlice";
import { connect, useDispatch, useSelector } from "react-redux";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      //   console.log(res?.data?.data);
      dispatch(addConnections(res?.data?.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections || connections.length === 0) {
    return (
      <div className="flex justify-center my-10">
        <h1 className="text-bold text-2xl">No Connections found</h1>
      </div>
    );
  }

  console.log(connections);
  return (
    <div className="my-10">
      <h1 className="text-bold text-3xl text-center text-white">Connections</h1>
      {connections.map((connection) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          connection;
        return (
          <div
            key={_id}
            className="m-4 p-4 border rounded-lg bg-base-300 flex gap-10 w-1/2 mx-auto"
          >
            <div>
              <img
                alt="photo"
                src={photoUrl}
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + "," + gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
