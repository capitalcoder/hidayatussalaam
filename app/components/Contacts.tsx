const Contacts = () => {
  return (
    <div id="kontak" className="flex flex-col gap-4 p-8 max-w-3xl mx-auto bg-gray-50">
      <h1 className="text-2xl font-bold">Contacts</h1>
      <p>
        For any inquiries or assistance, please reach out to us through the following contact information:
      </p>
      <ul className="list-disc pl-5">
        <li>Email: <a href="mailto:info@hidayatussalaam.org" className="text-blue-500 hover:underline">
          info@hidayatussalaam.org
        </a></li>
      </ul>
    </div>
  );
}

export default Contacts;