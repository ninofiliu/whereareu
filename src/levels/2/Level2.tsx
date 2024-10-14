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
        clue1="Hover over us to get clues!"
        clue2="If you're stuck, skip to the next level by updating the URL"
        clue3="That's it for this level!"
      />
    </>
  );
};
