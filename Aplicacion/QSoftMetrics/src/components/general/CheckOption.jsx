export default function CheckOption({ name, keyName, handleCheck }) {
  return (
    <div className="">
      <label className="flex  items-center cursor-pointer">
        <span className="label-text">{name}</span>
        <input
          type="checkbox"
          name={name}
          id={keyName}
          onChange={handleCheck}
          defaultChecked
          className="checkbox checkbox-sm ms-auto me-6 checkbox-warning"
        />
      </label>
    </div>
  );
}
