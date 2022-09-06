import { Box, Modal, Typography } from "@mui/material";
import React, { FC, useEffect } from "react";

interface ModalProps {
  setOpenModal: Function;
  id: number;
  blogTitle: string;
  blogText: string;
  blogDate: string | any;
  blogAuthor: string | number;
}

const ModalBlog: FC<ModalProps> = ({ setOpenModal }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setOpenModal(false);
  };

  useEffect(() => {
    handleOpen();
  }, []);

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box>
          <Typography>Mooooodal</Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ModalBlog;
