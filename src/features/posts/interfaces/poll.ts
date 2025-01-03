// images
export interface CarouselProps {
  imagePreviews: string[];
  handleRemoveImage: (index: number) => void;
}

//  modal poll
export interface PollData {
  question: string;
  options: string[];
}

export interface PollModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: PollData) => void;
}

// modal gif
export interface GifsModalProps {
  open: boolean;
  onClose: () => void;
  fetchGifs: (offset: number) => Promise<any>;
  handleGifClick: (
    gif: any,
    e: React.SyntheticEvent<HTMLElement, Event>,
  ) => void;
}
