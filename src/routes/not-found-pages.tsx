import { useRouteError } from 'react-router-dom';

export const NotFoundPages = () => {
  const error = useRouteError() as { message: string };
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <h1 className='text-3xl font-semibold'>Oops!</h1>
      <p className='mt-2 text-xl'>404 Not Found</p>
      <p>{error.message}</p>
    </div>
  );
};
