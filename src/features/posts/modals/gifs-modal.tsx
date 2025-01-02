import { Grid } from '@giphy/react-components';
import { Box, Modal } from '@mui/material';

interface GifsModalProps {
  open: boolean;
  onClose: () => void;
  fetchGifs: (offset: number) => Promise<any>;
  handleGifClick: (
    gif: any,
    e: React.SyntheticEvent<HTMLElement, Event>,
  ) => void;
}

export const GifsModal = ({
  open,
  onClose,
  fetchGifs,
  handleGifClick,
}: GifsModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        backgroundColor: 'rgb(148, 148, 148, 0.3)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'black',
          boxShadow: 24,
          p: 4,
          width: '90%',
          maxWidth: 500,
          borderRadius: 2,
          height: '80%',
          overflow: 'auto',
          scrollbarColor: '#949494 #000000',
          outline: 'none',
        }}
      >
        <h2 className="text-center font-interBold18 mb-2">Selecciona un GIF</h2>
        <Grid
          width={400}
          columns={3}
          fetchGifs={fetchGifs}
          onGifClick={handleGifClick}
        />
      </Box>
    </Modal>
  );
};
