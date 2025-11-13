import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/contants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestsSlice";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      console.log(err);
    }
  };

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + `/request/review/${status}/${_id}`,
        {},
        {
          withCredentials: true,
        }
      );
      fetchRequests();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests || requests.length === 0) {
    return (
      <div className="flex justify-center my-10">
        <h1 className="text-bold text-2xl">No Requests found</h1>
      </div>
    );
  }

  //   console.log(requests);
  return (
    <div className="my-10">
      <h1 className="text-bold text-3xl text-center text-white">Requests</h1>
      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          request.fromUserId;
        console.log("request", request);
        return (
          <div
            key={_id}
            className="m-4 p-4 border rounded-lg bg-base-300 flex items-center gap-10 w-2/5 mx-auto"
          >
            <div>
              <img
                alt="photo"
                src={photoUrl}
                className="w-20 h-20 rounded-full"
              />
            </div>
            <div>
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + "," + gender}</p>}
              <p>{about}</p>
            </div>
            <div className="flex gap-5">
              <button
                onClick={() => reviewRequest("rejected", request._id)}
                className="btn btn-soft btn-primary"
              >
                Reject
              </button>
              <button
                onClick={() => reviewRequest("accepted", request._id)}
                className="btn btn-soft btn-secondary"
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
