import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Google from "../../posts/Google";
import Huffington from "../../posts/Huffington";

function CloneDetailPage() {
  const postId = useParams();
  console.log(postId);

  const [now, setNow] = useState("");

  useEffect(() => {
    setNow(postId.id);
  }, [postId]);

  console.log(now)
  
  if (now === "Huffington"){
    return <Huffington />;
  }else if (now === "Google"){
      return <Google/>;
  }else{
      return(
          <div>
              404
          </div>
      )
  }

}

export default CloneDetailPage;
