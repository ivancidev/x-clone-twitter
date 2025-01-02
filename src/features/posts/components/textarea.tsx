import { Stack, Textarea } from '@chakra-ui/react';
interface PostFormProps {
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export const TexTarea = ({ text, handleChange }: PostFormProps) => {
  return (
    <Stack>
      <Textarea
        value={text}
        onChange={handleChange}
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
  );
};
