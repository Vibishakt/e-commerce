import { getData } from "api/ApiController";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserCard = ({ user = {}, setUser }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "350px",
        margin: "16px auto",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
      className="text-black col-span-3"
      onClick={() => {
        setUser(null);
        navigate(`/sample/${user.id}`);
      }}
    >
      <h2>{user.name}</h2>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Address:</strong> {user.address.street}, {user.address.suite},
        <br />
        {user.address.city}, {user.address.zipcode}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
      <p>
        <strong>Company:</strong> {user.company.name}
        <br />
        <em>{user.company.catchPhrase}</em>
      </p>
    </div>
  );
};

const Sample = () => {
  const [user, setUser] = useState(null);
  const { id = "" } = useParams();

  console.log("1111111", id, user);

  useEffect(() => {
    // Example API endpoint, replace with your actual API if needed
    if (id) {
      getData(`/users/${id}`)
        .then((data) => {
          setUser(data);
        })
        .catch(() => setUser(null));
    } else {
      getData(`/users`)
        .then((data) => {
          setUser(data);
        })
        .catch(() => setUser(null));
    }
  }, [id]);

  if (id) {
    return user ? (
      <UserCard user={user} setUser={setUser} />
    ) : (
      <p>Loading...</p>
    );
  }

  return (
    <div>
      <h1>User Card</h1>
      {user && user?.length > 0 ? (
        <div className="grid grid-cols-12">
          {user?.map((item) => (
            <UserCard key={item.id} user={item} setUser={setUser} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Sample;
