const usePreventLeave = () => {
    const listener = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };
    const enalbePrevent = () => window.addEventListener("beforeunload", listener);
    const disalbePrevent = () =>
      window.removeEventListener("beforeunload", listener);
    return { enalbePrevent, disalbePrevent };
  };
  
  const App = () => {
    const { enalbePrevent, disalbePrevent } = usePreventLeave();
    return (
      <div className="App">
        <button onClick={enalbePrevent}>Protect</button>
        <button onClick={disalbePrevent}>Unprotect</button>
      </div>
    );
  };