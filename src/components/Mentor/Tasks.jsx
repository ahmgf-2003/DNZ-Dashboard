import { LuNotepadText } from "react-icons/lu";

const Tasks = ({ children: text }) => {
    return (
        <span className="tasks">
            <LuNotepadText />
            {text}
        </span>
    );
};

export default Tasks;
