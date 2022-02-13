interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  footer: React.ReactNode;
  show: boolean;
  onClose: () => void;
}
