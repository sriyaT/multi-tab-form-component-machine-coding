const Interests = ({ data, setData }) => {
  const { interests } = data;

  const updateInterest = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };

  return (
    <div className="tab">
      <div>
        <label>
          <input
            type="checkbox"
            name="Coding"
            checked={interests.includes("Coding")}
            onChange={updateInterest}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Cooking"
            checked={interests.includes("Cooking")}
            onChange={updateInterest}
          />
          Cooking
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Music"
            checked={interests.includes("Music")}
            onChange={updateInterest}
          />
          Music
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Dance"
            checked={interests.includes("Dance")}
            onChange={updateInterest}
          />
          Dance
        </label>
      </div>
    </div>
  );
};
export default Interests;
