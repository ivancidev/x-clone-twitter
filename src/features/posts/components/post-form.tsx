import { Stack, Textarea } from '@chakra-ui/react';

export const PostForm = () => {
  return (
    <section className="flex items-center p-4 space-x-4">
      <img
        src="https://randomuser.me/api/portraits/men/75.jpg"
        alt="User Avatar"
        className="w-12 h-12 rounded-full"
      />

      <Stack>
        <Textarea
          placeholder="What is happening?"
          variant="outline"
          style={{
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            color: 'white',
            fontSize: '1.2rem',
            fontWeight: 400,
            resize: 'none',
            outline: 'none',
          }}
        />
      </Stack>
    </section>
  );
};
