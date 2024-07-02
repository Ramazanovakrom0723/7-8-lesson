import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ServiceValidationSchema } from "../../utils/validation";
import service from "../../service/service";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: 1.3,
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 3,
  outline: "none",
};

export default function EditService({ item, open, handleClose, onSave }) {
  const initialValues = {
    id: item.id || "",
    name: item.name || "",
    price: item.price || "",
  };

  const handleSubmit = async (data) => {
    try {
      const response = await service.update(data);
      if (response.status === 200) {
        onSave(data);
        handleClose();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit Service
        </Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={ServiceValidationSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                name="name"
                type="text"
                as={TextField}
                label="Service Name"
                fullWidth
                margin="normal"
                variant="outlined"
                helperText={
                  <ErrorMessage
                    name="name"
                    component="span"
                    className="text-[red] text-[15px]"
                  />
                }
              />
              <Field
                name="price"
                type="number"
                as={TextField}
                label="Service Price"
                fullWidth
                margin="normal"
                variant="outlined"
                helperText={
                  <ErrorMessage
                    name="price"
                    component="span"
                    className="text-[red] text-[15px]"
                  />
                }
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  gap: "12px",
                  marginTop: "5px",
                }}
              >
                <Button
                  onClick={handleClose}
                  type="button"
                  variant="contained"
                  color="primary"
                >
                  Close
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  disabled={isSubmitting}
                >
                  Save
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
}
