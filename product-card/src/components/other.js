function Loading() {
  return (
    <div className="loading">
      <img src="/images/loading.gif" alt="Loading..." />
    </div>
  );
}

function Error({ error }) {
  console.log(error);
  return (
    <div className="error">
      <h2>Oops! Something went wrong.</h2>
      <p>
        We're having trouble processing your request right now. Please try again
        later.
      </p>
    </div>
  );
}

export { Loading, Error };
