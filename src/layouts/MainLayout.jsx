const MainLayout = ({ children }) => {
  return (
    <div className="container h-screen space-y-2 p-6">
      <div className="heading text-2xl">ZenSmart Technical Exam - Todo App</div>
      <div className="todo-list space-y-2">{children}</div>
    </div>
  );
};

export default MainLayout;
