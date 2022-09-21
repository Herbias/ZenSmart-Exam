const MainLayout = ({ children }) => {
  return (
    <div className="container h-screen p-6">
      <div className="todo-list space-y-2">{children}</div>
    </div>
  );
};

export default MainLayout;
