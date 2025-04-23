import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const { login, isLoading } = useLogin();
  function onSubmit(data, e) {
    e.preventDefault();
    if (!data.email || !data.password) return null;
    login({ email: data.email, password: data.password });
  }
  return (
    <Form
      type="regular"
      onSubmit={handleSubmit(onSubmit)}
      className="min-w-[27rem] sm:min-w-[38rem]"
    >
      <FormRowVertical label="email">
        <Input
          type="email"
          placeholder="Enter your Email"
          id="email"
          defaultValue="moamen@example.com"
          {...register("email", { required: "required field !" })}
        />
      </FormRowVertical>
      <FormRowVertical label="password">
        <Input
          type="password"
          id="password"
          defaultValue="26431012"
          {...register("password", { required: "required field !" })}
        />
      </FormRowVertical>
      <Button size="large" disabled={isLoading}>
        {isLoading ? <SpinnerMini /> : "Log In"}
      </Button>
    </Form>
  );
}

export default LoginForm;
