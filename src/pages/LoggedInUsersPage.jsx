import { useState } from "react";
import { getUsers } from "../api/api";
import PageHeader from "../components/PageHeader";
import { dummyUser } from "../data/dummyUser";
import useFetch from "../hooks/useFetch";

export default function LoggedInUsersPage() {
  // const { data, isLoading, error } = useFetch(getUsers);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  function handleLogIn(event) {
    event.preventDefault();
    setUserLoggedIn(true);
  }

  function handleLogOut(event) {
    event.preventDefault();
    setUserLoggedIn(false);
  }

  return (
    <>
      <h3>*Users Page*</h3>
      <PageHeader />
      {userLoggedIn === false ? (
        <div className="new-user-message">
          <p>
            New to Daily Spews? Don't fret, fren, you've come to the right
            place! Please create an account to access the full suite of
            features.{" "}
          </p>
          <button onClick={handleLogIn} className="sign-up-button">
            Sign-up
          </button>
          <p>Already have an account? What are you waiting for?!!?!?</p>
          <button onClick={handleLogIn} className="sign-up-button">
            Log-in
          </button>
        </div>
      ) : (
        <div className="user-profile-container">
          <p>
            <strong>Username: </strong>
            {dummyUser.username}
          </p>
          <p>
            <strong>Name:</strong> {dummyUser.name}
          </p>
          <p>
            <strong>Avatar:</strong>
          </p>
          <img
            className="user-avatar-image"
            src={dummyUser.avatar_url}
            alt="user-avatar-image"
          />
          <button onClick={handleLogOut} id="log-out-button">
            Log Out
          </button>
        </div>
      )}
    </>
  );
}
