/* import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { object, string } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const userMyFormSchema = object({
  password: string().min(1, "Password is required"),
  confirmPassword: string().min(1, "confirm password is required"),
});
type FormData = {
  password: string;
  confirmPassword: string;
};

export const MyForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(userMyFormSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    setIsLoading(true);
    console.log(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };
  return (
    <>
      <div className="flex flex-col px-8 max-w-lg mx-auto py-8 sm:py-16">
        <form className="max-w-[600px] mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="password">Password</label>
            <input {...register("password")} type="password" />
            <p>{errors.password?.message as string}</p>
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input {...register("confirmPassword")} type="password" />
            <p>{errors.confirmPassword?.message as string}</p>
          </div>
          <div className="mt-8 flex justify-start">
            <button
              type="submit"
              className="flex items-center justify-center bg-primary hover:bg-secondary text-sm h-[40px] w-full p-2 rounded-md text-white shadow-all-sides"
            >
              {isLoading ? "Loading..." : "Save Password"}
              <span className="mx-2">Save Password</span>
            </button>
          </div>

          <div className="text-center mt-4 text-sm">
            <Link
              to="/auth/login"
              className="text-secondary font-semibold hover:text-primary"
            >
              Return to Sign in
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
*/
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "Required" }),
  age: z.number().min(10),
});

export const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <input {...register("name")} />
      {errors.name?.message && <p>{errors.name?.message as string}</p>} <br />
      <input type="number" {...register("age", { valueAsNumber: true })} />
      {errors.age?.message && <p>{errors.age?.message as string}</p>}
      <input type="submit" />
    </form>
  );
};
