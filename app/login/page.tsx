import { Button, TextField } from "@mui/material";

export default function Page() {
  return (
    <form>
      <TextField
        id="standar-basic"
        label="Email"
        variant="filled"
        color="success"
        type="email"
      />
      <TextField
        id="standar-basic"
        label="Password"
        variant="filled"
        color="success"
        type="password"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
