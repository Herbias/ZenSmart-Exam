import TodoItem from "../components/TodoItem";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <TodoItem id={1} name="Test" status="Done" />
      <TodoItem id={0} name="Test 2" />
      <button className="button button--default fixed bottom-6 right-6">
        Add
      </button>
    </MainLayout>
  );
};

export default Home;
