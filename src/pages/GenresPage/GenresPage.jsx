import { useParams } from 'react-router-dom';

const GenrePage = () => {
  const { genreId } = useParams();
  return <p>{genreId}</p>;
};

export default GenrePage;
