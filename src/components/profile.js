const Profile = ({ data, setData }) => {
  const { name, age, email } = data;

  const dataUpdate = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <div className="tab">
      <div>
        <label>Name : </label>
        <input
          type="text"
          value={name}
          onChange={(e) => dataUpdate(e, "name")}
        />
      </div>
      <div>
        <label>Age : </label>
        <input
          type="number"
          value={age}
          onChange={(e) => dataUpdate(e, "age")}
        />
      </div>
      <div>
        <label>Email : </label>
        <input
          type="text"
          value={email}
          onChange={(e) => dataUpdate(e, "email")}
        />
      </div>
    </div>
  );
};
export default Profile;
