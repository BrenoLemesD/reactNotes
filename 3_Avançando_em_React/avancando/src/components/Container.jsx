const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>Este é o titulo do container</h2>
      <p>Valor passado como prop: {myValue}</p>
      {children}
    </div>
  );
};

export default Container;
