const Ques = () => {
  return (
    <div>
      <div className="w-50 mx-auto mt-5 row">
        <h1>QUESTIONS AND ANSWER</h1>
        <div className="card col-lg-6">
          <h1>How react wroks?</h1>
          <p>
            React is a javascript library.It works in declarative code. It works
            unidirectionally.It maintains a tree and it will do efficient diff
            computations on the nodes. It's used for handling the view layer for
            web and mobile apps. React also allows us to create reusable UI
            components.
          </p>
        </div>
        <div className="card col-lg-6">
          <h1>Differences between props and state.</h1>
          <p>
            The main difference between props and state is props is internal and
            state is external.Props is controlled by the component itself.And
            state is controlled by whatever renders the component.Props are
            immutable and state is mutable.Props can be accessed by the child
            component and state cannot be accessed by child component.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ques;
