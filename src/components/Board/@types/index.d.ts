interface BoardProps extends BoardInterface {
  tasks: { [key: string]: TaskInterface };
  uniqueTags: string[];
  onShowModal: () => void;
}
