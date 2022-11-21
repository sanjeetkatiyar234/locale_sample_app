import React from "react";
import RightSidePanel from "layout/RightSidePanel";
import { Card, CardContent, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const HomeRightSidePanel = () => {
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };
  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };
  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  return (
    <RightSidePanel>
      {/* <Card component="div">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Overview Summary
          </Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          laborum non perferendis asperiores qui. Earum, esse?
        </CardContent>
      </Card> */}
      <Card>
        <CardContent>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small1">Select 1</InputLabel>
            <Select
              labelId="demo-select-small1"
              id="demo-select-small1"
              value={value1}
              label="Select 1"
              onChange={handleChange1}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small2">Select 2</InputLabel>
            <Select
              labelId="demo-select-small2"
              id="demo-select-small2"
              value={value2}
              label="Select 2"
              onChange={handleChange2}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>
            
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small3">Select 3</InputLabel>
            <Select
              labelId="demo-select-small3"
              id="demo-select-small3"
              value={value3}
              label="Select 3"
              onChange={handleChange3}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>
        </CardContent>
      </Card>
    </RightSidePanel>
  );
};

export default HomeRightSidePanel;
