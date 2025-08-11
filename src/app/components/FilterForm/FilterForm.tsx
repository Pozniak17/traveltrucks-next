import { FilterValues } from "@/app/types/Form.types";
import { Form, Formik, FormikHelpers } from "formik";
import { useId } from "react";
import styles from "./FilterForm.module.css";

export type FilterFormProps = {
  onSubmit: () => void;
};

const initialValues: FilterValues = {
  location: "",
  AC: false,
  transmission: "",
  kitchen: false,
  TV: false,
  bathroom: false,
  form: "",
};

export default function FilterForm() {
  const locationFieldId = useId();

  return (
    <div></div>
    // <Formik>
    //   <Form className={styles.form}></Form>
    // </Formik>
  );
}
