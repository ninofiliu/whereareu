import { useEffect } from "react";

import { Clueware } from "../../components/Clueware";

export const Level2 = () => {
  useEffect(() => {
    alert(
      "damn, so Ethel deleted their account or smth? they had one for decades over there..."
    );
    alert("whatever, let's find them back, i miss this little rabbit!!");
    alert(
      "let's see, all i have is their cringe @ they used everywhere, where do i go from there?"
    );
    alert("maybe the clueware i torrented once will finally come in handy...");
  }, []);

  return (
    <>
      <Clueware
        clue1="Congrats you found the clueware!"
        clue2="If you're stuck on a puzzle, hover over us to get clues"
        clue3="If you still can't resolve the puzzle, skip to the next one by modifying the URL"
      />
    </>
  );
};
