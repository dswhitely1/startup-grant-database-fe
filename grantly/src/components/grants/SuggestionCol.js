import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { suggestionStyles } from "../../styles/suggestionStyles";

const SuggestionCol = props => {
  console.log("sugCol props", props)

  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(props.rowData.requests.length)
  }, [props.rowData.requests.length])

  const style = suggestionStyles()

  return <Typography className={style.suggestionCol}>{count}</Typography>
};
export default SuggestionCol
