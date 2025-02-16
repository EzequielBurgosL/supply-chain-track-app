import './InputForm.css';

type Props = {
  itemId: string;
  setItemId: (event: string) => void;
  callback: () => Promise<void>;
}

export const InputForm = (props: Props) => {
  return (
    <div className="input-form">
      <input
        type="text"
        value={props.itemId}
        onChange={(e) => props.setItemId(e.target.value)}
        placeholder="Enter Item ID"
      />
      <button type="submit" onClick={props.callback}>
        Fetch Events
      </button>
    </div>
  )
}