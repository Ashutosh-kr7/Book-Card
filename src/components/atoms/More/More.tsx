import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import IconButton from "@mui/material/IconButton";

const More = () => {
  return (
    <>
      <IconButton
        aria-label="settings"
        sx={{
          position: "relative",
          left: "85.75%",
          right: "12.5%",
          bottom: "41.67%",
          top: "41.67%",
        }}
      >
        <MoreHorizOutlinedIcon />
      </IconButton>
    </>
  );
};

export default More;
