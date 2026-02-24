import Card from './Card';
import App from '../App';
import Router from '../router';


function Homepage({ articles,loading }) {
  if (loading) {
    return <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-black">
      {articles?.map((article, index) => (
        <Card
          key={index}
          article={article}
          index={index}
        />
      ))}
    </div>
  );
}

export default Homepage;