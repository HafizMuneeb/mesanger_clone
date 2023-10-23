"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import {BsGithub, BsGoogle} from 'react-icons/bs';

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      //Axios Register
    }

    if (variant === "LOGIN") {
      //NextAuth SignIn
    }
  };

  const socialActions = (actions: string) => {
    setIsLoading(true);

    //NextAuth Social Sign
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input id="name" label="Name" register={register} errors={errors} />
          )}
          <Input
            id="email"
            label="Email Address"
            register={register}
            type="email"
            errors={errors}
          />
          <Input
            id="password"
            label="Password"
            register={register}
            type="password"
            errors={errors}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === "LOGIN" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                    Or Continue with
                </span>
            </div>
          </div>


          <div className="mt-6 flex gap-2">
            <AuthSocialButton 
                icon={BsGithub}
                onClick={() => socialActions('github')}
            />
            <AuthSocialButton 
                icon={BsGoogle}
                onClick={() => socialActions('google')}
            />
          </div>
        </div>
        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
            <div>
                {variant === 'LOGIN' ? 'New to Messanger' : 'Already have an account?'}
            </div>
            <div
                onClick={toggleVariant}
                className="underline cursor-pointer"
            >
                {variant === 'LOGIN' ? 'Create an accout' : 'Login'}
            </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;