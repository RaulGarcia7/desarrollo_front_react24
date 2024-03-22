import useFetch from "../hooks/useFetch";

function EmailList() {
  const { data: emails, loading } = useFetch("https://jsonplaceholder.typicode.com/comments");

  // Añadido limitador por cantidad muy grande de datos recibidos de la API
  const limitedEmails = emails.slice(0, 6);

  return (
    <>
      <h1>Emails</h1>
      {loading ? <p>Loading...</p> :
      <ul>
        {limitedEmails.map((email) => (
          <li key={email.id}>{email.email}</li>
        ))}
      </ul>}
    </>
  );
}

export default EmailList;
