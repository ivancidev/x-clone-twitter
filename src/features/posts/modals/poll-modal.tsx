import { Box, Button, IconButton, Modal, TextField } from '@mui/material';
import { useState } from 'react';
import { PollModalProps } from '../interfaces/poll';
import { CloseButton } from '@/components/ui/close-button';

export const PollModal = ({ isOpen, onClose, onSubmit }: PollModalProps) => {
  const [question, setQuestion] = useState<string>('');
  const [options, setOptions] = useState<string[]>([]);

  function handleOptionchange(index: number, value: string): void {
    setOptions((prev) => {
      const updateOptions = [...prev];
      updateOptions[index] = value;
      return updateOptions;
    });
  }

  function handleSubmit(): void {
    if (question.trim() && options.every((opt) => opt.trim())) {
      onSubmit({ question, options });
      onClose();
    }
  }

  function addOption(): void {
    setOptions((prev) => [...prev, '']);
  }

  function removeOption(index: number): void {
    setOptions((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      sx={{ backgroundColor: 'rgba(148, 148, 148, 0.3)' }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'black',
          p: 4,
          borderRadius: 2,
        }}
      >
        <IconButton
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'white'
          }}
          onClick={onClose}
        >
          <CloseButton />
        </IconButton>
        <h2 className="text-center font-bold">Crea tu encuesta</h2>
        <TextField
          label="Pregunta"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          fullWidth
          margin="normal"
          InputProps={{
            sx: {
              color: 'white',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
            },
          }}
          InputLabelProps={{
            sx: {
              color: 'white',
              '&.Mui-focused': {
                color: 'white',
              },
            },
          }}
        />
        {options.map((option, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              marginBottom: 2,
            }}
          >
            <TextField
              label={`Opción ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionchange(index, e.target.value)}
              fullWidth
              margin="normal"
              InputProps={{
                sx: {
                  color: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                },
              }}
              InputLabelProps={{
                sx: {
                  color: 'white',
                  '&.Mui-focused': {
                    color: 'white',
                  },
                },
              }}
            />
            <CloseButton onClick={() => removeOption(index)} />
          </Box>
        ))}
        <Button onClick={addOption} variant="outlined" fullWidth sx={{ mt: 2 }}>
          Agregar opcion
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
        >
          Crear encuesta
        </Button>
      </Box>
    </Modal>
  );
};
