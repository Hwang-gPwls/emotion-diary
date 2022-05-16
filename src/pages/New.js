import { useEffect } from "react";
import DiaryEditor from "./../components/DiaryEditor";

const New = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title");
    titleElement.innerHTML = `하루 일기장 새로운 일기`;
  }, []);

  return (
    <div>
      <DiaryEditor />
    </div>
  );
};

export default New;
