import { useGetData } from '@/hooks/use-get-data';
import { PostItem } from './post-item';
import { config } from '@/config/env-config';
import { CircularProgress } from '@mui/material';

// const posts: Post[] = [
//   {
//     id: '1',
//     description:
//       'La edad no debería ser una barrera para alcanzar tus metas. A mis 47 años, encontré mi primer trabajo como desarrollador hace apenas un mes.',
//     username: 'Antonio47',
//     createdAt: 'Dec 26',
//     avatarUrl:
//       'https://th.bing.com/th/id/OIP.rLG6WIiXpgbc9AD9VD61cQHaEK?rs=1&pid=ImgDetMain',
//     imgPost:
//       'https://th.bing.com/th/id/OIP.rLG6WIiXpgbc9AD9VD61cQHaEK?rs=1&pid=ImgDetMain',
//     name: 'Antonios',
//   },
//   {
//     id: '2',
//     description:
//       'Hace un mes, Antonio consiguió su primer trabajo como programador. Estoy seguro de que su experiencia ayudará a muchas personas a superar los desafíos de la vida.',
//     username: 'MoureDev',
//     createdAt: '3h',
//     avatarUrl:
//       'https://th.bing.com/th/id/OIP.rLG6WIiXpgbc9AD9VD61cQHaEK?rs=1&pid=ImgDetMain',
//     imgPost:
//       'https://preview.redd.it/full-stack-development-technologies-v0-nca4mge1iyaa1.jpg?auto=webp&s=94b719a349ae6952d813f00888b572b716065be1',
//     name: 'Moure',
//   },
//   {
//     id: '3',
//     description:
//       'No fue fácil, pero tras años de esfuerzo diario, finalmente logré cambiar mi rumbo profesional. ¡Nunca es tarde para empezar de nuevo!',
//     username: 'CodeLearner',
//     createdAt: 'Dec 27',
//     avatarUrl:
//       'https://th.bing.com/th/id/OIP.rLG6WIiXpgbc9AD9VD61cQHaEK?rs=1&pid=ImgDetMain',
//     imgPost:
//       'https://th.bing.com/th/id/OIP.rLG6WIiXpgbc9AD9VD61cQHaEK?rs=1&pid=ImgDetMain',
//     name: 'CodeLear',
//   },
//   {
//     id: '4',
//     description:
//       'El aprendizaje continuo y la práctica constante son la clave para alcanzar tus sueños. ¡Nunca dejes de intentarlo!',
//     username: 'DevMotivation',
//     createdAt: '16h',
//     avatarUrl:
//       'https://th.bing.com/th/id/OIP.rLG6WIiXpgbc9AD9VD61cQHaEK?rs=1&pid=ImgDetMain',
//     imgPost:
//       'https://th.bing.com/th/id/OIP.rLG6WIiXpgbc9AD9VD61cQHaEK?rs=1&pid=ImgDetMain',
//     name: 'DevMot',
//   },
//   {
//     id: '5',
//     description:
//       'Hoy cumplo un año desde que decidí aprender a programar. Ahora, estoy trabajando en mi primer proyecto personal. ¡Es increíble lo que se puede lograr con dedicación!',
//     username: 'JuniorCoder',
//     createdAt: '8h',
//     avatarUrl:
//       'https://th.bing.com/th/id/OIP.rLG6WIiXpgbc9AD9VD61cQHaEK?rs=1&pid=ImgDetMain',
//     imgPost:
//       'https://th.bing.com/th/id/OIP.rLG6WIiXpgbc9AD9VD61cQHaEK?rs=1&pid=ImgDetMain',
//     name: 'JuniorCod',
//   },
// ];
export const PostList = () => {
  const {
    data: posts = [],
    isLoading: isPostsLoading,
    error,
  } = useGetData(config.API_URL);
  if (isPostsLoading || error || !posts) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className=" bg-twitter-dark">
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
};
