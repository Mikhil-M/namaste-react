const Contact = () => {
  return (
    <div className="p-4 m-4">
      <h1 className="font-bold text-3xl">Contact</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          className="p-2 m-2 border border-black"
        />
        <input
          type="text"
          placeholder="Message"
          className="p-2 m-2 border border-black"
        />
        <button className="p-2 m-2 border border-black bg-gray-50 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
