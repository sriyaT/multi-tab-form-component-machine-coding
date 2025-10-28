const Settings = ({ data, setData }) => {
  const { theme } = data;

  const updateTheme = (e) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.name,
    }));
  };
  return (
    <div className="tab">
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={updateTheme}
          />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="light"
            checked={theme === "light"}
            onChange={updateTheme}
          />
          Light
        </label>
      </div>
    </div>
  );
};
export default Settings;
